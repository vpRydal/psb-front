import 'reflect-metadata';
import canUseDOM from 'can-use-dom';
import i18next, { i18n as i18nBase } from 'i18next';
import { Provider, useInjection } from 'inversify-react';
import { throttle } from 'lodash';
import { observer } from 'mobx-react-lite';
import React, {
  FC, memo, useEffect,
} from 'react';
import { useSSR } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from '@client/router';
import baseContainer from '@data/misc/base-container';
import LocaleStore from '@stores/_misc/locale';
import UiStore from '@stores/_misc/ui';
import RouterUtils from '@utils/router';

import './styles/index.scss';

export interface Props {
  i18n: i18nBase
}

const InitStoresHoc: FC<Props> = observer(({ children, i18n: i18nProp }) => {
  const locale = useInjection(LocaleStore);
  const ui = useInjection(UiStore);

  useSSR((i18nProp || i18next).store.data, (i18nProp || i18next).language);

  useEffect(() => {
    locale.applyLocale();

    const handleResize = throttle(() => ui.applySize(window.innerWidth), 200);

    handleResize();

    if (canUseDOM) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={ui.theme}>
      {children}
    </ThemeProvider>
  );
});

const App: FC<Props> = props => {
  const { i18n } = props;

  return (
    <Provider container={baseContainer}>
      <InitStoresHoc i18n={i18n}>
        <div>
          <div>
            <Link to={RouterUtils.getHome()}>На главную</Link>
            <Link to={RouterUtils.getBooking({ id: 1 })}>на бронь</Link>
          </div>
          <Routes />
        </div>
      </InitStoresHoc>
    </Provider>
  );
};

export default memo(App);
