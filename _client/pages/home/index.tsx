import { Provider, useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import * as PageStyle from '@components/_common/page-style';
import Intent from '@specs/ui/intent';
import Locale from '@specs/ui/locale';
import { Theme } from '@specs/ui/themes/base';
import LocaleStore from '@stores/_common/locale';
import UiStore from '@stores/_common/ui';
import Button from '@ui/button';

import homePageContainer from './container';

export interface TParams {}
export type IProps = RouteComponentProps<TParams>

const IndexPage: FC<IProps> = () => {
  const locale = useInjection(LocaleStore);
  const ui = useInjection(UiStore);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

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
            <Button isLoading={loading} onClick={() => locale.set(Locale.ru)}>RU RU RU RU RU</Button>
            <Button onClick={() => locale.set(Locale.en)}>EN</Button>
            <Button intent={Intent.DANGER} onClick={() => setLoading(!loading)}>Loading</Button>
            <Button onClick={() => ui.themeName = Theme.DEFAULT} intent={Intent.SECONDARY}>Default theme</Button>
            <Button onClick={() => ui.themeName = Theme.DARK} intent={Intent.SECONDARY}>Dark theme</Button>
          </div>
        </PageStyle.Header>
      </PageStyle.Page>
    </Provider>
  );
};

export default observer(IndexPage);
