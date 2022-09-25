import canUseDOM from 'can-use-dom';
import { inject, injectable } from 'inversify';
import { clone } from 'lodash';
import {
  action, computed, makeObservable, observable,
} from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import AppStore from '@stores/App';
import PassengerStore from '@stores/passenger';

@injectable()
class BookingStore {
  @observable.shallow
  passengers: PassengerStore[] = []

  appStore: AppStore

  constructor(@inject(AppStore) appStore: AppStore) {
    this.appStore = appStore;
    makeObservable(this);
    makePersistable(this, {
      name: 'BookingStore',
      properties: ['passengers'],
      storage: canUseDOM ? localStorage : undefined,
    }).then((result) => {
      result.getPersistedStore().then(action((persistStore) => {
        this.passengers = persistStore?.passengers.map((passenger: { formData: any; }) => {
          const model = new PassengerStore();

          model.formData = clone(passenger.formData);

          return model;
        });
      }));
    });
  }

  @computed
  get info() {
    return this.passengers.map((passenger) => passenger.fullInfo);
  }

  @action
  addPassenger() {
    this.passengers.push(new PassengerStore());
  }
}

export default BookingStore;
