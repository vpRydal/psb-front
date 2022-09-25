import canUseDOM from 'can-use-dom';
import { injectable } from 'inversify';
import { computed, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import darkTheme from '@client/styles/themes/dark';
import defaultTheme from '@client/styles/themes/default';
import IBaseTheme, { Theme } from '@specs/ui/themes/base';

@injectable()
export default class UiStore {
  @observable.ref
  themeName: Theme = Theme.DEFAULT

  constructor() {
    makeObservable(this);
    makePersistable(this, {
      storage: canUseDOM ? localStorage : undefined,
      name: 'UiStore',
      properties: ['themeName'],
    });
  }

  @computed
  get theme(): IBaseTheme {
    switch (this.themeName) {
      case Theme.DARK: return darkTheme;
      case Theme.DEFAULT: return defaultTheme;
      default: return defaultTheme;
    }
  }
}
