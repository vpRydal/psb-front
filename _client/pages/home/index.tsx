import { Provider } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

import * as PageStyle from '@components/_common/page-style';

import homePageContainer from './container';

export interface TParams {}
export type IProps = RouteComponentProps<TParams>

const IndexPage: FC<IProps> = () => (
  <Provider container={homePageContainer} standalone>
    <PageStyle.Page>
      <PageStyle.Header>
        <PageStyle.Logo src="/assets/images/logo192.png" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <PageStyle.Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        />
        <div />
      </PageStyle.Header>
    </PageStyle.Page>
  </Provider>
);

export default observer(IndexPage);
