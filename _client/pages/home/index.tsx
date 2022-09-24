import React, {FC} from 'react';
import {RouteComponentProps} from "react-router";

import {Provider} from "inversify-react";
import homePageContainer from "./container";
import {observer} from "mobx-react-lite";

export interface TParams {}
export interface IProps extends RouteComponentProps<TParams>{}

const IndexPage: FC<IProps> = () =>  {
  return (
    <Provider container={homePageContainer} standalone={true}>
      <div className="App">
        <header className="App-header">
          <img src="/assets/images/logo192.png" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <div>
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default observer(IndexPage);
