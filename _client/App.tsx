import i18next from 'i18next';
import { Provider, useInjection } from 'inversify-react';
import React, { FC, memo, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Link } from 'react-router-dom';

import Routes from '@client/router';
import baseContainer from '@data/misc/base-container';
import LocaleStore from '@stores/_common/locale';
import RouterUtils from '@utils/router';

import './styles/index.scss';

const InitStoresHoc: FC = ({ children }) => {
  const locale = useInjection(LocaleStore);

  useEffect(() => {
    locale.applyLocale();
  }, []);

  return (
    <>
      {children}
    </>
  );
};

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
