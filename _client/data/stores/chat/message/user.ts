import MessageType from '@specs/_misc/message-type';
import BaseMessageStore from '@stores/chat/message/base';
import BotMessageStore from '@stores/chat/message/bot';

export default class UserMessageStore extends BaseMessageStore {
  reply?: undefined;

  type = MessageType.USER

  constructor(public readonly replTo: BotMessageStore) {
    super();
  }
}
