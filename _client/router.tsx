import React from "react";
import {Provider} from "inversify-react";
import {interfaces} from "inversify";
import {Route, Switch, useLocation} from "react-router-dom";

import loadable, {LoadableComponent} from "@loadable/component";
import indexPageContainer from "@store/containers";
import bookingPageContainer from "@store/containers/booking";


const IndexPage = loadable(() => import('./pages/index'));
const OtherPage = loadable(() => import('./pages/other-page'));

export const ROUTES = {
  index: '/',
  other: '/other-page'
} as const

const renderPage = (Page: LoadableComponent<any>, container: interfaces.Container) => {
  return (
    <Provider container={container} standalone={true} key={container.id}>
      <Page/>
    </Provider>
  )
};

const Routes = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path={ROUTES.index} render={() => renderPage(IndexPage, indexPageContainer)} exact={true} />
      <Route path={ROUTES.other} render={() => renderPage(OtherPage, bookingPageContainer)}/>
    </Switch>
  )
}

export default Routes
