import { Provider, useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import * as PageStyle from '@components/_common/page-style';
import Intent from '@specs/ui/intent';
import Locale from '@specs/ui/locale';
import { Theme } from '@specs/ui/themes/base';
import LocaleStore from '@stores/_misc/locale';
import UiStore from '@stores/_misc/ui';
import Popover from '@ui/_misc/popover';
import Text from '@ui/_misc/text';
import Button from '@ui/button';
import Container from '@ui/container';
import Switch from '@ui/switch';

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
      <Container>
        <PageStyle.Page>
          <PageStyle.Header>
            <PageStyle.Logo src="/assets/images/logo192.png" alt="logo" />
            <Text>
              {t('Изменить')}
              {' '}
              src/App.tsx
              {' '}
              {t('и сохрани дл изменения')}
              .
            </Text>
            <PageStyle.Link
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            />
            <div>
              <Popover
                Content={() => (
                  <div>
                    asd asd asd asd xcv fgh dfghdfghrty fhg dfgh tityuityui hjk ghjk ghjkuyio
                  </div>
                )}
                showOnHover
                showArrow
              >
                <Button isLoading={loading} onClick={() => locale.set(Locale.ru)}>RU RU RU RU RU</Button>
              </Popover>
              <Button onClick={() => locale.set(Locale.en)}>EN</Button>
              <Button intent={Intent.DANGER} onClick={() => setLoading(!loading)}>Loading</Button>
              <Button onClick={() => ui.themeName = Theme.DEFAULT} intent={Intent.SECONDARY}>Default theme</Button>
              <Button onClick={() => ui.themeName = Theme.DARK} intent={Intent.SECONDARY}>Dark theme</Button>
            </div>
            <Switch />
          </PageStyle.Header>
        </PageStyle.Page>
      </Container>
    </Provider>
  );
};

export default observer(IndexPage);
