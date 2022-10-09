import { injectable } from 'inversify';
import { last } from 'lodash';
import {
  action, computed, makeObservable, observable,
} from 'mobx';

import MessageType from '@specs/_misc/message-type';
import { ServerActionStore } from '@stores/_misc/server-action';
import { ServerActionManagerStore } from '@stores/_misc/server-actions-manager';
import BotMessageStore from '@stores/chat/message/bot';
import UserMessageStore from '@stores/chat/message/user';

type TServerActionKeys = 'getCategories';
export type ChatStoreActionManager = ServerActionManagerStore<Record<TServerActionKeys, ServerActionStore>>;
@injectable()
export default class ChatStore {
  private readonly _serverActionManager: ChatStoreActionManager = new ServerActionManagerStore({
    getCategories: new ServerActionStore(),
  });

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
  get botMessages() {
    return this._messagesPool.filter(message => message.type === MessageType.BOT) as BotMessageStore[];
  }

  @computed
  get userMessages() {
    return this._messagesPool.filter(message => message.type === MessageType.USER) as UserMessageStore[];
  }

  @computed
  get lastUserMessage() {
    return last(this.userMessages) as UserMessageStore | undefined;
  }

  @computed
  get lastBotMessage() {
    return last(this.botMessages) as BotMessageStore | undefined;
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

  @action
  getServerAction = this._serverActionManager.getServerAction;
}
