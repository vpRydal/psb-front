import {
  action, computed, makeObservable, observable, reaction, IReactionDisposer,
} from 'mobx';

import appContainer from '@data/misc/base-container';
import Locale from '@specs/ui/locale';
import LocaleStore from '@stores/_misc/locale';

import { TValidatorRule, FieldValidatorStore } from './field-validator';
import FieldValueTransformerStore, { TFieldValueTransformerStoreOptions } from './transformer';

export class FieldStore<V> {
    readonly onValueChangeAfter?: (value: V) => void;

    readonly onValueChangeBefore?: (value: V) => void;

    private readonly _value: V;

    private readonly transformer: FieldValueTransformerStore<V>;

    private validator: FieldValidatorStore;

    @observable private _isDirty: boolean;

    @observable private data: { value: V } ;

    constructor(
      value: V,
      rules?: Array<TValidatorRule<V>>,
      public options?: {
          readonly onValueChangeAfter?: (value: V) => V;
          readonly onValueChangeBefore?: (value: V) => V;
          readonly transform?: TFieldValueTransformerStoreOptions<V>;
      },
    ) {
      this.data = { value };
      this._value = value;
      this._isDirty = false;
      this.onValueChangeAfter = options?.onValueChangeAfter;
      this.onValueChangeBefore = options?.onValueChangeBefore;

      const localeStore = appContainer.get(LocaleStore);

      this.validator = new FieldValidatorStore();
      this.transformer = new FieldValueTransformerStore(options?.transform);
      this.validator.registerRule(() => this.value, ...rules || []);

      this.applyLocale(localeStore.locale);

      makeObservable(this);
    }

    @computed({ equals: () => false })
    get value() {
      return this.data.value;
    }

    @computed
    get isValid() {
      return this.validator.isValid;
    }

    @computed
    get errors() {
      return this.validator.errors.length > 0 ? this.validator.errors : [];
    }

    @computed
    get isDirty() {
      return this._isDirty;
    }

    @action
    applyLocale(locale: Locale) {
      this.validator.locale = locale;

      if (!this.isValid) {
        this.validate();
      }
    }

    @action
    validate(doTouch = true) {
      if (doTouch) {
        this._isDirty = true;
      }

      this.data = {
        value: this.transformer.makeTransformOnValidate(this.value),
      };

      return this.validator.validate();
    }

    @action
    reset() {
      this.validatorReset();
      this.updateInitial();
      this.resetDirty();
    }

    @action
    validatorReset() {
      this.validator.reset();
    }

    @action
    updateInitial() {
      this.data = {
        value: this._value,
      };
    }

    @action
    resetDirty() {
      this._isDirty = false;
    }

    @action
    set(value: V) {
      this._isDirty = true;

      if (this.onValueChangeBefore) {
        this.onValueChangeBefore(value);
      }

      this.data = {
        value: this.transformer.makeTransformOnChange(value),
      };

      if (this.onValueChangeAfter) {
        this.onValueChangeAfter(this.value);
      }
    }
}
