import { Provider, useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { useLocation, withRouter } from 'react-router-dom';

import * as PageStyle from '@components/_common/page-style';
import Info from '@components/booking/passengers';
import Locale from '@specs/ui/locale';
import LocaleStore from '@stores/_misc/locale';
import AppStore from '@stores/App';
import Button from '@ui/button';

import bookingPageContainer from './conatiner';

export interface TParams {}
export interface IProps extends RouteComponentProps<TParams>{}

const Index: FC<IProps> = () => {
  const app = useInjection(AppStore);
  const locale = useInjection(LocaleStore);
  const location = useLocation();

  return (
    <Provider container={bookingPageContainer} standalone>
      <PageStyle.Page>
        <PageStyle.Header>
          <PageStyle.Logo src="/assets/images/logo192.png" className="App-logo" alt="logo" />
          <h1>
            Its OTHER PAGE asdsd (
            {location.pathname}
            )
          </h1>
          <Button onClick={() => locale.set(Locale.ru)}>RU RU RU RU RU</Button>
          <Button onClick={() => locale.set(Locale.en)}>EN</Button>
          <p>
            Edit
            {' '}
            <code>src/App.tsx</code>
            {' '}
            and save to reload.
          </p>
          <PageStyle.Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React +
            {' '}
            {app.counter}
            {' '}
            +
            {' '}
            {app.counterV2}
          </PageStyle.Link>
          <Info />
          <div>
            <button onClick={app.inc} type="button">+1</button>
          </div>
        </PageStyle.Header>
      </PageStyle.Page>
    </Provider>
  );
};

export default withRouter(observer(Index));
