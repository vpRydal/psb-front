import { Provider } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

import homePageContainer from './container';

export interface TParams {}
export type IProps = RouteComponentProps<TParams>

const IndexPage: FC<IProps> = () => (
  <Provider container={homePageContainer} standalone>
    <div className="App">
      <header className="App-header">
        <img src="/assets/images/logo192.png" className="App-logo" alt="logo" />
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
        />
        <div />
      </header>
    </div>
  </Provider>
);

export default observer(IndexPage);
