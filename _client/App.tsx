import React from 'react';
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

import Routes, {ROUTES} from "@client/router";

import "./styles/index.scss";
import {Provider} from "inversify-react";
import appContainer from "@store/containers/app";

const App = observer(() => {
  return (
    <Provider container={appContainer}>
      <div>
        <div>
          <Link to={ROUTES.index}>На главную</Link>
          <Link to={ROUTES.other}>на другую</Link>
        </div>
        <Routes/>
      </div>
    </Provider>
  )
});


export default App;
