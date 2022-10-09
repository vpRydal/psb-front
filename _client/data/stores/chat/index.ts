import { injectable } from 'inversify';
import { last } from 'lodash';
import {
  action, computed, makeObservable, observable,
} from 'mobx';

import MessageType from '@specs/_misc/message-type';
import BaseMessageStore from '@stores/chat/message/base';
import BotMessageStore from '@stores/chat/message/bot';
import UserMessageStore from '@stores/chat/message/user';

@injectable()
export default class ChatStore {
  @observable.shallow
  protected _messagesPool: (UserMessageStore | BotMessageStore)[] = []

  constructor() {
    makeObservable(this);
  }

  @computed
  get messagesPool() {
    return this._messagesPool;
  }

  @computed
  get lastMessage() {
    return last(this._messagesPool);
  }

  @computed
  get lastUserMessage() {
    return this._messagesPool.find(message => message.type === MessageType.USER) as UserMessageStore | undefined;
  }

  @computed
  get lastBotMessage() {
    return this._messagesPool.find(message => message.type === MessageType.BOT) as BotMessageStore | undefined;
  }

  @action.bound
  addMessage(message: UserMessageStore | BotMessageStore) {
    this._messagesPool = [...this._messagesPool, message];
  }

  @action.bound
  setMessages(messages: (UserMessageStore | BotMessageStore)[]) {
    this._messagesPool = messages;
  }

  @action.bound
  reset() {
    this._messagesPool = [];
  }
}
