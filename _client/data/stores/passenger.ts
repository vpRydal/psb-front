import { computed, makeObservable } from 'mobx';

import { FieldStore } from '@stores/_misc/field';
import { FormStore } from '@stores/_misc/form';
import i18next from '@translations';

export default class PassengerStore {
  form: FormStore<{
    name: FieldStore<string>;
    type: FieldStore<string>;
    birthDate: FieldStore<string>;
  }>

  constructor() {
    makeObservable(this);
    this.form = new FormStore<{name: FieldStore<string>; type: FieldStore<string>; birthDate: FieldStore<string>}>({
      name: new FieldStore('', [
        value => {
          const text = i18next.t('Обязательное поле');
          if (value === '') {
            return text;
          }
          return null;
        },
      ]),
      type: new FieldStore(''),
      birthDate: new FieldStore(''),
    });
  }

  @computed
  get fullInfo() {
    const { name, type, birthDate } = this.form.fields;

    return `${name.value} - ${type.value} - ${birthDate.value}`;
  }
}
