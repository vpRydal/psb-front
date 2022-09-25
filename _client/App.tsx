import { Provider } from 'inversify-react';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Routes from '@client/router';
import baseContainer from '@data/misc/base-container';
import RouterUtils from '@utils/router';

const App = () => (
  <Provider container={baseContainer}>
    <div>
      <div>
        <Link to={RouterUtils.getHome()}>На главную</Link>
        <Link to={RouterUtils.getBooking({ id: 1 })}>на бронь</Link>
      </div>
      <Routes />
    </div>
  </Provider>
);

export default memo(App);
