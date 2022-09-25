import i18next from 'i18next';
import { Provider, useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC, memo, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from '@client/router';
import baseContainer from '@data/misc/base-container';
import LocaleStore from '@stores/_common/locale';
import UiStore from '@stores/_common/ui';
import RouterUtils from '@utils/router';

import './styles/index.scss';

const InitStoresHoc: FC = observer(({ children }) => {
  const locale = useInjection(LocaleStore);
  const ui = useInjection(UiStore);

  useEffect(() => {
    locale.applyLocale();
  }, []);

  return (
    <ThemeProvider theme={ui.theme}>
      {children}
    </ThemeProvider>
  );
});

const App = () => (
  <Provider container={baseContainer}>
    <I18nextProvider i18n={i18next}>
      <InitStoresHoc>
        <div>
          <div>
            <Link to={RouterUtils.getHome()}>На главную</Link>
            <Link to={RouterUtils.getBooking({ id: 1 })}>на бронь</Link>
          </div>
          <Routes />
        </div>
      </InitStoresHoc>
    </I18nextProvider>
  </Provider>
);

export default memo(App);
