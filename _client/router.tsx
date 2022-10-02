import loadable, { LoadableComponent } from '@loadable/component';
import React, { memo, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

const HomePage = loadable(() => import('./pages/home'));
const BookingPage = loadable(() => import('./pages/booking'));

export const ROUTES = {
  home: '/',
  booking: '/booking/:id',
} as const;

const renderPage = (Page: LoadableComponent<any>) => (
  <Page />
);

const Routes = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path={ROUTES.booking} render={() => renderPage(BookingPage)} />
      <Route path={ROUTES.home} render={() => renderPage(HomePage)} />
    </Switch>
  );
};

export default memo(Routes);
