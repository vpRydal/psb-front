import MessageType from '@specs/_misc/message-type';
import BaseMessageStore from '@stores/chat/message/base';
import CategoryReplyVariantsStore from '@stores/chat/reply-variant/category';
import CreditReplyVariantsStore from '@stores/chat/reply-variant/credit';
import CustomerTypeReplyVariantsStore from '@stores/chat/reply-variant/customer-type';
import LoanReplyVariantsStore from '@stores/chat/reply-variant/loan';

export default class BotMessageStore extends BaseMessageStore {
  type = MessageType.BOT

  constructor(public reply: CategoryReplyVariantsStore | CreditReplyVariantsStore |
    LoanReplyVariantsStore | CustomerTypeReplyVariantsStore) {
    super();
  }
}
