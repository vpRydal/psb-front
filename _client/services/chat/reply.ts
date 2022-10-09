import { inject, injectable } from 'inversify';
import { transaction } from 'mobx';

import CategoriesAdapter from '@adapters/chat/categories';
import fetchGetCategories from '@requests/chat/fetch-get-categories';
import LoanType from '@specs/_misc/loan-type';
import MessageType from '@specs/_misc/message-type';
import ReplyType from '@specs/_misc/reply-type';
import CustomerType from '@specs/_misc/сustomer-type';
import ChatStore from '@stores/chat';
import BotMessageStore from '@stores/chat/message/bot';
import UserMessageStore from '@stores/chat/message/user';
import CategoryReplyVariantsStore from '@stores/chat/reply-variant/category';
import CustomerTypeReplyVariantsStore from '@stores/chat/reply-variant/customer-type';
import LoanReplyVariantsStore from '@stores/chat/reply-variant/loan';

@injectable()
export default class ChatReplyService {
  @inject(ChatStore) protected chatStore!: ChatStore

  selectCustomerType(customerType: CustomerType, message: BotMessageStore) {
    const {
      addMessage, lastMessage, lastUserMessage,
    } = this.chatStore;
    let finalLastMessage = lastMessage;

    if (!lastMessage) {
      return;
    }

    /*    if (lastUserMessage?.replTo.reply.type === ReplyType.CUSTOMER_TYPE) {
      const startIndex = messagesPool.findIndex(message => message.id === lastUserMessage?.replTo.id);
      setMessages(messagesPool.slice(0, startIndex + 1));
      finalLastMessage = lastUserMessage?.replTo;
    } */

    if (message.reply.type === ReplyType.CUSTOMER_TYPE && lastUserMessage) {
      finalLastMessage = new BotMessageStore(new CustomerTypeReplyVariantsStore((message.reply as CustomerTypeReplyVariantsStore).data));
      finalLastMessage.reply.selectedVariant = customerType;
      addMessage(finalLastMessage);
    }

    transaction(() => {
      addMessage(new UserMessageStore(finalLastMessage as BotMessageStore));

      if (customerType === CustomerType.PRIVATE_PERSON) {
        addMessage(new BotMessageStore(new LoanReplyVariantsStore([LoanType.CREDIT, LoanType.MORTGAGE, LoanType.CREDIT_CARD])));
      } else if (customerType === CustomerType.JURISTIC_PERSON) {
        addMessage(new BotMessageStore(new LoanReplyVariantsStore([LoanType.REFINANCING])));
      }
    });
  }

  selectLoan(loanType: LoanType, message: BotMessageStore) {
    const {
      addMessage, lastMessage, lastBotMessage,
    } = this.chatStore;
    let finalLastMessage = lastMessage;

    if (!finalLastMessage || finalLastMessage.type !== MessageType.BOT) {
      return;
    }

    const lastMessageIsCurrent = lastBotMessage?.id === message.id;

    if (message.reply.type === ReplyType.LOAN && !lastMessageIsCurrent) {
      finalLastMessage = new BotMessageStore(new LoanReplyVariantsStore((message.reply as LoanReplyVariantsStore).data));
      finalLastMessage.reply.selectedVariant = loanType;
      addMessage(finalLastMessage);
    }

    const newUserMessage = new UserMessageStore(finalLastMessage as BotMessageStore);

    message.replTo = newUserMessage;

    addMessage(newUserMessage);

    this.getCategories(loanType).then(res => {
      if (res) {
        const newBotMessage = new BotMessageStore(new CategoryReplyVariantsStore(res));

        addMessage(newBotMessage);
      }
    });
  }

  selectCategory(id: number, message: BotMessageStore) {
    const { addMessage, lastMessage } = this.chatStore;

    if (!lastMessage || lastMessage.type !== MessageType.BOT) {
      return;
    }

    const newUserMessage = new UserMessageStore(lastMessage as BotMessageStore);

    addMessage(newUserMessage);
  }

  async getCategories(loanType: LoanType) {
    const { botMessages } = this.chatStore;
    const action = this.chatStore.getServerAction('getCategories');
    const typeOfPerson = botMessages.slice().reverse()
      .find(message => message.reply.type === ReplyType.CUSTOMER_TYPE && message.reply.selectedVariant);

    if (!typeOfPerson) {
      return null;
    }

    try {
      action.pending();

      const response = await fetchGetCategories({
        type_of_loan: loanType,
        type_of_person: (typeOfPerson.reply as CustomerTypeReplyVariantsStore).selectedVariant!,
      });

      action.complete();

      return CategoriesAdapter.adaptGetCategoryRequest(response.data.data);
    } catch (e: any) {
      action.error(e.mesage);
      console.error(e);
    }

    return null;
  }
}
