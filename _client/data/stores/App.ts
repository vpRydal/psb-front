import { injectable } from 'inversify';
import {
  action, computed, makeObservable,
  observable,
} from 'mobx';
import 'reflect-metadata';

@injectable()
export default class AppStore {
    @observable
    counter = 0;

    constructor() {
      makeObservable(this);
    }

    @computed
    get counterV2() {
      return this.counter * 2;
    }

    @action.bound
    inc() {
      this.counter += 1;
    }
}
