import React, {memo} from 'react';
import {Link} from "react-router-dom";

import Routes, {ROUTES} from "@client/router";

import "./styles/index.scss";
import {Provider} from "inversify-react";
import baseContainer from "@data/misc/base-container";
import RouterUtils from "@client/utils/router";

const App = () => {
  return (
    <Provider container={baseContainer}>
      <div>
        <div>
          <Link to={RouterUtils.getHome()}>На главную</Link>
          <Link to={RouterUtils.getBooking({ id: 1 })}>на бронь</Link>
        </div>
        <Routes/>
      </div>
    </Provider>
  )
};


export default memo(App);
