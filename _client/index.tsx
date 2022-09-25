import 'reflect-metadata';
import './styles/index.scss';

import { loadableReady } from '@loadable/component';
import { createBrowserHistory } from 'history';
import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router-dom';

import App from './App';

loadableReady(() => {
  hydrate(
    (
      <React.StrictMode>
        <Router history={createBrowserHistory()}>
          <App />
        </Router>
      </React.StrictMode>
    ), document.getElementById('root'),
  );
});
