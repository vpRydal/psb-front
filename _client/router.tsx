import React, {memo} from "react";
import {Route, Switch, useLocation} from "react-router-dom";

import loadable, {LoadableComponent} from "@loadable/component";


const HomePage = loadable(() => import('./pages/home'));
const BookingPage = loadable(() => import('./pages/booking'));

export const ROUTES = {
  index: '/',
  booking: '/booking'
} as const

const renderPage = (Page: LoadableComponent<any>) => {
  return (
    <Page/>
  )
};

const Routes = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path={ROUTES.booking} render={() => renderPage(BookingPage)}/>
      <Route path={ROUTES.index} render={() => renderPage(HomePage)}  />
    </Switch>
  )
}

export default memo(Routes)
