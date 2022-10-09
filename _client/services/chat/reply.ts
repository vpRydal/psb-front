import { inject, injectable } from 'inversify';
import { transaction } from 'mobx';

import LoanType from '@specs/_misc/loan-type';
import MessageType from '@specs/_misc/message-type';
import ReplyType from '@specs/_misc/reply-type';
import CustomerType from '@specs/_misc/сustomer-type';
import ChatStore from '@stores/chat';
import BotMessageStore from '@stores/chat/message/bot';
import UserMessageStore from '@stores/chat/message/user';
import CustomerTypeReplyVariantsStore from '@stores/chat/reply-variant/customer-type';
import LoanReplyVariantsStore from '@stores/chat/reply-variant/loan';

@injectable()
export default class ChatReplyService {
  @inject(ChatStore) protected chatStore!: ChatStore

  selectedCustomerType(customerType: CustomerType, message: BotMessageStore) {
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

  selectedLoan(loanType: LoanType) {
    const { addMessage, lastMessage } = this.chatStore;

    if (!lastMessage || lastMessage.type !== MessageType.BOT) {
      return;
    }

    addMessage(new UserMessageStore(lastMessage as BotMessageStore));
  }
}
