import {
  action, makeObservable, observable, transaction,
} from 'mobx';

import { ServerActionStore } from '@stores/_misc/server-action';

export class ServerActionManagerStore<T extends Record<string, ServerActionStore>> {
  @observable.ref
  private readonly _serverActions: T;

  constructor(actions: T) {
    this._serverActions = actions;
    makeObservable(this);
  }

  @action
  getServerAction = (key: keyof T) => this._serverActions[key]

  @action
  reset() {
    transaction(() => {
      Object.values(this._serverActions).forEach(serverAction => serverAction.reset());
    });
  }
}
