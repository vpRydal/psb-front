import {
  action, computed, makeObservable, observable,
} from 'mobx';

import Locale from '@specs/ui/locale';

/**
 * Ошибка string или true (если нет сообщения ошибки)
 * null - нет ошибки
 */
export type TValidatorRule<V> = (value: V, locale: Locale) => string | true | null;

export class FieldValidatorStore {
    private getCheckData: () => any;

    @observable.shallow
    rules: Array<TValidatorRule<any>>;

    @observable.shallow
    errors: string[];

    locale: Locale = Locale.ru;

    constructor() {
      this.rules = [];
      this.errors = [];
      this.getCheckData = () => undefined;
      makeObservable(this);
    }

    @computed
    get isValid() {
      return this.firstError === null;
    }

    @computed
    get isInvalid() {
      return this.firstError !== null;
    }

    @computed
    get firstError(): string | null {
      return (this.errors.length > 0 && this.errors[0]) || null;
    }

    @action
    reset() {
      this.errors = [];
    }

    @action
    removeRule(ruleFunc: TValidatorRule<any>) {
      const funcIndex = this.rules.indexOf(ruleFunc);
      if (funcIndex !== -1) {
        this.rules.splice(funcIndex, 1);
      }
      return this;
    }

    @action
    registerRule(getCheckData: () => any, ...rules: Array<TValidatorRule<any>>) {
      this.getCheckData = getCheckData;
      this.rules = this.rules.concat(...rules);
      return this;
    }

    @action
    validate() {
      this.errors = [];
      let isValid = true;

      this.rules.forEach(rule => {
        const message = rule(this.getCheckData(), this.locale);

        const index = this.errors.indexOf(message === true ? 'Validation error' : (message || ''));

        if (index !== -1) {
          this.errors.splice(index, 1);
        } else if (message) {
          this.errors.push(message === true ? 'Validation error' : message);
        }
        isValid = isValid && !message;
      });

      return isValid;
    }
}
