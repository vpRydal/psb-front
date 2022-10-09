import uniqueId from 'lodash/uniqueId';

import MessageType from '@specs/_misc/message-type';
import BaseReplyVariantsStore from '@stores/chat/reply-variant/base';

export default abstract class BaseMessageStore {
  abstract type: MessageType

  abstract reply?: BaseReplyVariantsStore

  id: string

  replTo?: BaseMessageStore

  constructor() {
    this.id = uniqueId('message-');
  }
}
