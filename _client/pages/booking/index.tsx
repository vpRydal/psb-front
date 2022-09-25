import { Provider, useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { useLocation, withRouter } from 'react-router-dom';

import Info from '@components/booking/passengers';
import AppStore from '@stores/App';

import bookingPageContainer from './conatiner';

export interface TParams {}
export interface IProps extends RouteComponentProps<TParams>{}

const Index: FC<IProps> = () => {
  const app = useInjection(AppStore);
  const location = useLocation();

  return (
    <Provider container={bookingPageContainer} standalone>
      <div className="App">
        <header className="App-header">
          <img src="/assets/images/logo192.png" className="App-logo" alt="logo" />
          <h1>
            Its OTHER PAGE asdsd (
            {location.pathname}
            )
          </h1>
          <p>
            Edit
            {' '}
            <code>src/App.tsx</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="App-link"
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
          </a>
          <Info />
          <div>
            <button onClick={app.inc} type="button">+1</button>
          </div>
        </header>
      </div>
    </Provider>
  );
};

export default withRouter(observer(Index));
