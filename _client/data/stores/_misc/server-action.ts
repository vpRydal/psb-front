import {
  action, computed, makeObservable, observable, transaction,
} from 'mobx';

import ServerActionStatuses from '@specs/_misc/server-action-statuses';

export class ServerActionStore {
  @observable
  status: ServerActionStatuses;

  @observable.shallow
  messages: string[];

  @observable
  pid?: string;

  constructor(status: ServerActionStatuses = ServerActionStatuses.NONE) {
    this.status = status;
    this.messages = [];
    this.pid = undefined;

    makeObservable(this);
  }

  @computed
  get firstMessage() {
    return this.messages[0];
  }

  @computed
  get isComplete() {
    return this.status === ServerActionStatuses.COMPLETE;
  }

  @computed
  get isError() {
    return this.status === ServerActionStatuses.ERROR;
  }

  @computed
  get isPending() {
    return this.status === ServerActionStatuses.PENDING;
  }

  @computed
  get isEmpty() {
    return this.status === ServerActionStatuses.NONE;
  }

  @action
  setMessages(messages?: string | string[] | Error) {
    if (Array.isArray(messages)) {
      this.messages = messages;
    } else if (messages instanceof Error) {
      this.messages = [messages.message];
    } else if (messages) {
      this.messages = [messages];
    }
  }

  @action
  setPid(pid?: string): void {
    this.pid = pid;
  }

  @action
  pending(messages?: string | string[]) {
    this.status = ServerActionStatuses.PENDING;
    this.setMessages(messages);
  }

  @action
  complete(pid?: string, messages?: string | string[]) {
    this.status = ServerActionStatuses.COMPLETE;
    this.setMessages(messages);
    this.setPid(pid);
  }

  @action
  error(error?: string | string[] | Error, pid?: string) {
    this.status = ServerActionStatuses.ERROR;
    this.setPid(pid);
    this.setMessages(error);
  }

  @action
  empty() {
    this.status = ServerActionStatuses.NONE;
  }

  @action
  reset() {
    transaction(() => {
      this.status = ServerActionStatuses.NONE;
      this.messages = [];
    });
  }
}
