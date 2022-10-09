import canUseDOM from 'can-use-dom';
import { injectable } from 'inversify';
import {
  action, computed, makeObservable, observable,
} from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import darkTheme from '@client/styles/themes/dark';
import defaultTheme from '@client/styles/themes/default';
import Size from '@specs/_common/size';
import IBaseTheme, { Theme } from '@specs/ui/themes/base';
import AppSizeUtil from '@utils/app-size';

@injectable()
export default class UiStore {
  @observable.ref
  protected _size: Size = Size.LG

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

  @computed
  get size() {
    return this._size;
  }

  @computed
  get isMobile() {
    return [Size.XS, Size.SM].includes(this._size);
  }

  @computed
  get isTablet() {
    return this.isMobile || [Size.MD].includes(this._size);
  }

  @computed
  get isDesktop() {
    return [Size.LG, Size.XL].includes(this._size);
  }

  @computed
  get isMinTablet() {
    return [Size.MD].includes(this._size) || this.isDesktop;
  }

  @action
  applySize(windowWidth: number) {
    this._size = AppSizeUtil.getSize(windowWidth, this.theme.appSize);
  }
}
