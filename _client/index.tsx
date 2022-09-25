import 'reflect-metadata';

import { loadableReady } from '@loadable/component';
import canUseDOM from 'can-use-dom';
import { createBrowserHistory } from 'history';
import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from './App';

const sheet = new ServerStyleSheet();

loadableReady(() => {
  hydrate(
    (
      <React.StrictMode>
        <StyleSheetManager sheet={canUseDOM ? undefined : sheet.instance}>
          <Router history={createBrowserHistory()}>
            <App />
          </Router>
        </StyleSheetManager>
      </React.StrictMode>
    ), document.getElementById('root'),
  );
});
