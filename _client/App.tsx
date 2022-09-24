import React, {memo} from 'react';
import {Link} from "react-router-dom";

import Routes, {ROUTES} from "@client/router";

import "./styles/index.scss";
import {Provider} from "inversify-react";
import baseContainer from "@store/misc/base-container";

const App = () => {
  return (
    <Provider container={baseContainer}>
      <div>
        <div>
          <Link to={ROUTES.index}>На главную</Link>
          <Link to={ROUTES.booking}>на другую</Link>
        </div>
        <Routes/>
      </div>
    </Provider>
  )
};


export default memo(App);
