import { inject, injectable } from 'inversify';
import { transaction } from 'mobx';

import CategoriesAdapter from '@adapters/chat/categories';
import CreditsAdapter from '@adapters/chat/credits';
import fetchGetCategories from '@requests/chat/fetch-get-categories';
import fetchGetCredits from '@requests/chat/fetch-get-credits';
import LoanType from '@specs/_misc/loan-type';
import MessageType from '@specs/_misc/message-type';
import ReplyType from '@specs/_misc/reply-type';
import CustomerType from '@specs/_misc/сustomer-type';
import CreditReplyVariantsData, { CreditProduct } from '@specs/models/reply-varians-data/credit';
import FormReplyData from '@specs/models/reply-varians-data/form-data';
import ChatStore from '@stores/chat';
import BotMessageStore from '@stores/chat/message/bot';
import UserMessageStore from '@stores/chat/message/user';
import CategoryReplyVariantsStore from '@stores/chat/reply-variant/category';
import CreditReplyVariantsStore from '@stores/chat/reply-variant/credit';
import CreditViewReplyVariantsStore from '@stores/chat/reply-variant/credit-view';
import CustomerTypeReplyVariantsStore from '@stores/chat/reply-variant/customer-type';
import FormDataReplyVariantsStore from '@stores/chat/reply-variant/form-data';
import LoanReplyVariantsStore from '@stores/chat/reply-variant/loan';
import CustomerUtils from '@utils/customer';

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
        addMessage(new BotMessageStore(new LoanReplyVariantsStore(CustomerUtils.getCustomerLoanTypes()[CustomerType.PRIVATE_PERSON])));
      } else if (customerType === CustomerType.JURISTIC_PERSON) {
        addMessage(new BotMessageStore(new LoanReplyVariantsStore(CustomerUtils.getCustomerLoanTypes()[CustomerType.JURISTIC_PERSON])));
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

    const newBotMessage = new BotMessageStore(new FormDataReplyVariantsStore(
      (message.reply as CategoryReplyVariantsStore).data.categories.find(categorie => categorie.customer_category_id === id)!,
    ));

    newBotMessage.replTo = newUserMessage;
    addMessage(newBotMessage);

    const userMessageWithForm = new UserMessageStore(newBotMessage);

    addMessage(userMessageWithForm);
  }

  selectCredit(creid: CreditProduct, message: BotMessageStore) {
    const { addMessage, lastMessage } = this.chatStore;

    const newUserMessage = new UserMessageStore(lastMessage as BotMessageStore);

    addMessage(newUserMessage);

    const newBotMessage = new BotMessageStore(new CreditViewReplyVariantsStore(message.reply.data as CreditReplyVariantsData, creid));

    newBotMessage.replTo = newUserMessage;
    addMessage(newBotMessage);
  }

  confirmForm(formData: FormReplyData, message: BotMessageStore) {
    const { botMessages, addMessage } = this.chatStore;

    const loanType = botMessages.slice().reverse()
      .find(_message => _message.reply.type === ReplyType.LOAN)?.reply.selectedVariant as LoanType;
    const typeOfPerson = CustomerUtils.getCustomerLoanTypes()[CustomerType.PRIVATE_PERSON].includes(loanType)
      ? CustomerType.PRIVATE_PERSON : CustomerType.JURISTIC_PERSON;
    const categoryId = (message.replTo?.replTo?.reply as CategoryReplyVariantsStore).selectedVariant?.customer_category_id;

    this.getCredits({
      type_of_person: typeOfPerson, type_of_loan: loanType, category_id: categoryId!, sum: formData.sum, term: formData.term,
    }).then(res => {
      if (res) {
        const newBotMessage = new BotMessageStore(new CreditReplyVariantsStore(res));

        addMessage(newBotMessage);
      }
    });
  }

  async getCategories(loanType: LoanType) {
    const { botMessages } = this.chatStore;
    const action = this.chatStore.getServerAction('getCategories');
    const botMessageWithCustomerType = botMessages.slice().reverse()
      .find(message => message.reply.type === ReplyType.CUSTOMER_TYPE && message.reply.selectedVariant);

    if (!botMessageWithCustomerType) {
      return null;
    }

    const typeOfPerson = CustomerUtils.getCustomerLoanTypes()[CustomerType.JURISTIC_PERSON].includes(loanType)
      ? CustomerType.JURISTIC_PERSON : CustomerType.PRIVATE_PERSON;

    try {
      action.pending();

      const response = await fetchGetCategories({
        type_of_loan: loanType,
        type_of_person: typeOfPerson,
      });

      action.complete();

      return CategoriesAdapter.adaptGetCategoryRequest(response.data.data);
    } catch (e: any) {
      action.error(e.mesage);
      console.error(e);
    }

    return null;
  }

  async getCredits(params: Parameters<typeof fetchGetCredits>[0]) {
    const action = this.chatStore.getServerAction('getCredits');

    try {
      action.pending();

      const response = await fetchGetCredits(params);

      action.complete();

      return CreditsAdapter.adaptGetCreditRequest(response.data.data);
    } catch (e: any) {
      action.error(e.mesage);
      console.error(e);
    }

    return null;
  }
}
