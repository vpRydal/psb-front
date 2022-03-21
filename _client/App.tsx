import {provider} from 'react-ioc';
import React from 'react';
import {observer} from "mobx-react";
import {Link} from "react-router-dom";

import Store from "@store";
import Routes, {ROUTES} from "@client/router";


function App() {

  return (
    <div>
      <div>
        <Link to={ROUTES.index}>На главную</Link>
        <Link to={ROUTES.other}>на другую</Link>
      </div>
      <Routes/>
    </div>
  )
}

export default provider(
  Store
)(observer(App));
