import {computed, makeObservable, observable} from "mobx";

export default class PassengerStore {
  @observable.deep
  formData: {
    birthDate: string;
    name: string;
    type: string;
  } = {
    birthDate: '',
    name: '',
    type: '',
  }

  constructor() {
    makeObservable(this);
  }

  @computed
  get fullInfo() {
    const { name, type, birthDate } = this.formData;

    return `${name} - ${type} - ${birthDate}`;
  }
}
