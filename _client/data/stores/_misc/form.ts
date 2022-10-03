import {
  action, computed, IReactionDisposer, makeObservable, observable, reaction,
} from 'mobx';

import appContainer from '@data/misc/base-container';
import Locale from '@specs/ui/locale';
import LocaleStore from '@stores/_misc/locale';

import { FieldStore } from './field';

export class FormStore<T extends { [key: string]: FieldStore<any> | Array<FieldStore<any>> | T }> {
  setLocaleReactionDisposer?: IReactionDisposer;

  @observable
  protected _fields: T;

  constructor(fields: T) {
    this._fields = fields;
    const localeStore = appContainer.get(LocaleStore);

    this.applyLocale(localeStore.locale);

    makeObservable(this);
  }

  @computed
  get fields() {
    return this._fields;
  }

  @computed
  get isValid() {
    return this.allFields.every(field => field.isValid);
  }

  @computed
  get isDirty() {
    return this.allFields.some(field => field.isDirty);
  }

  @computed
  get allFields() {
    const fields: Array<FieldStore<any>> = [];
    this._runThrowFields(this._fields, field => fields.push(field));

    return fields;
  }

  @action
  applyLocale(locale: Locale) {
    this._runThrowFields(this._fields, field => field.applyLocale(locale));
  }

  @action
  reset() {
    this._runThrowFields(this._fields, field => field.reset());
  }

  @action
  resetValidation() {
    this._runThrowFields(this._fields, field => field.validatorReset());
  }

  @action
  updateInitialValues() {
    this._runThrowFields(this._fields, field => field.updateInitial());
  }

  @action
  resetDirty() {
    this._runThrowFields(this._fields, field => field.resetDirty());
  }

  @action
  swap(fieldName: keyof T, otherName: keyof T) {
    const res = this._fields[fieldName];
    this._fields[fieldName] = this._fields[otherName];
    this._fields[otherName] = res;
  }

  @action
  validate(doTouch = true) {
    this._runThrowFields(this._fields, field => field.validate(doTouch));
    return this.isValid;
  }

  /**
   * Хелпер, чтобы получить поля из всей структуры
   */
  private _runThrowFields(fields: T, callBack: (field: FieldStore<any>) => void) {
    Object.values(fields).forEach(item => {
      if (item instanceof FieldStore) {
        callBack?.(item);
      } else if (Array.isArray(item)) {
        item.forEach(item1 => {
          callBack?.(item1);
        });
      } else if (item) {
        this._runThrowFields(item, callBack);
      }
    });
  }
}
