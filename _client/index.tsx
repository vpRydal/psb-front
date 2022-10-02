import { loadableReady } from '@loadable/component';
import canUseDOM from 'can-use-dom';
import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import i18next, { translatorPromise } from '@translations';

import App from './App';

const sheet = new ServerStyleSheet();

loadableReady(() => {
  translatorPromise.then(() => {
    hydrate(
      (
        <React.StrictMode>
          <StyleSheetManager sheet={canUseDOM ? undefined : sheet.instance}>
            <Router history={createBrowserHistory()}>
              <Suspense fallback={null}>
                <App i18n={i18next} />
              </Suspense>
            </Router>
          </StyleSheetManager>
        </React.StrictMode>
      ), document.getElementById('root'),
    );
  });
});
