import loadable, { LoadableComponent } from '@loadable/component';
import React, { memo } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

const HomePage = loadable(() => import('./pages/home'));

export const ROUTES = {
  home: '/',
} as const;

const renderPage = (Page: LoadableComponent<any>) => (
  <Page />
);

const Routes = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path={ROUTES.home} render={() => renderPage(HomePage)} />
    </Switch>
  );
};

export default memo(Routes);
