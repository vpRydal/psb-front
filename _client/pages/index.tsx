import React, {FC, useMemo} from 'react';
import {useLocation, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {observer} from "mobx-react-lite";

import {useInjection} from "inversify-react";
import AppStore from "@store/App";
import Test from "@client/pages/Test";

export interface TParams {}
export interface IProps extends RouteComponentProps<TParams>{}

const IndexPage: FC<IProps> = () =>  {
  const location = useLocation();
  const app = useInjection(AppStore);
  const testService = useMemo(() => new Test(), []);
  function gandleDo() {
    testService.do().then(() => {
      console.log(6)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/assets/images/logo192.png" className="App-logo" alt="logo" />
        <h1>Its INDEX PAGE ({location.pathname})</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React + {app.counter} + {app.counterV2}
        </a>
        <div>
          <button onClick={app.inc}>+1</button>
          <button onClick={gandleDo}>Dooooo</button>
        </div>
      </header>
    </div>
  );
}

export default withRouter(observer(IndexPage));
