import canUseDOM from 'can-use-dom';
import i18next from 'i18next';
import { injectable } from 'inversify';
import {
  action, computed, makeObservable, observable,
} from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import moment from 'moment';

import Locale from '@specs/ui/locale';

@injectable()
export default class LocaleStore {
  static readonly DEFAULT_LOCALE = Locale.ru;

  static readonly DEFAULT_LOCALES = [Locale.ru, Locale.en];

  @observable
  _locale: Locale;

  @observable.shallow
  readonly locales: Locale[];

  constructor() {
    this._locale = LocaleStore.DEFAULT_LOCALE;
    this.locales = LocaleStore.DEFAULT_LOCALES;

    makeObservable(this);
    makePersistable(this, {
      name: 'LocaleStore',
      properties: ['_locale'],
      storage: canUseDOM ? localStorage : undefined,
    });
  }

  @computed
  get locale() {
    return this._locale;
  }

  @action
  async set(locale: Locale) {
    if (!this.locales.includes(locale)) {
      return;
    }
    await i18next.changeLanguage(locale);
    moment.locale(locale);
    this._locale = locale;
  }

  @action
  async applyLocale() {
    // Автоматическое определение языка
    const localeDetected = i18next.language || window.localStorage.i18nextLng;
    try {
      if (Object.values(Locale).includes(localeDetected) && this.locales.includes(localeDetected)) {
        this._locale = localeDetected;
      } else {
        this._locale = LocaleStore.DEFAULT_LOCALE;
      }
    } catch (e) { this._locale = LocaleStore.DEFAULT_LOCALE; }

    moment.locale(this._locale);
    await i18next.changeLanguage(this._locale);
  }
}
