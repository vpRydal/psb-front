import React from 'react';
import './App.scss';
import {provider, useInstance} from 'react-ioc';
import Store from "@store";
import {observer} from "mobx-react";
import {useLocation} from "react-router-dom";


function App() {
  const { app } = useInstance(Store);
  const location = useLocation();

  return (
    <div className="App">
        <header className="App-header">
        <img src="/assets/logo192.png" className="App-logo" alt="logo" />
            <h1>Current location is {location.pathname}</h1>
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
        </div>
      </header>
    </div>
  );
}

export default provider(
    Store
)(observer(App));
