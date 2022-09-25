import { Provider, useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import * as PageStyle from '@components/_common/page-style';
import Locale from '@specs/ui/locale';
import LocaleStore from '@stores/_common/locale';

import homePageContainer from './container';

export interface TParams {}
export type IProps = RouteComponentProps<TParams>

const IndexPage: FC<IProps> = () => {
  const locale = useInjection(LocaleStore);
  const { t } = useTranslation();

  return (
    <Provider container={homePageContainer} standalone>
      <PageStyle.Page>
        <PageStyle.Header>
          <PageStyle.Logo src="/assets/images/logo192.png" alt="logo" />
          <p>
            {t('Изменить')}
            {' '}
            <code>src/App.tsx</code>
            {' '}
            {t('и сохрани дл изменения')}
            .
          </p>
          <PageStyle.Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          />
          <div>
            <button type="button" onClick={() => locale.set(Locale.ru)}>RU</button>
            <button type="button" onClick={() => locale.set(Locale.en)}>EN</button>
          </div>
        </PageStyle.Header>
      </PageStyle.Page>
    </Provider>
  );
};

export default observer(IndexPage);
