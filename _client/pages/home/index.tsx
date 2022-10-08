import { Provider, useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import MainTitle from '@components/_common/main-title';
import * as PageStyle from '@components/_common/page-style';
import fetchTest from '@requests/fetch-test';
import Intent from '@specs/ui/intent';
import Locale from '@specs/ui/locale';
import { Theme } from '@specs/ui/themes/base';
import LocaleStore from '@stores/_misc/locale';
import UiStore from '@stores/_misc/ui';
import Popover from '@ui/_misc/popover';
import Text from '@ui/_misc/text';
import Button from '@ui/button';
import Container from '@ui/container';
import Input from '@ui/form/input';
import Message from '@ui/message';

import homePageContainer from './container';
import * as Style from './style';

export interface TParams {}
export type IProps = RouteComponentProps<TParams>

const IndexPage: FC<IProps> = () => {
  const locale = useInjection(LocaleStore);
  const ui = useInjection(UiStore);
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchTest();
  }, []);

  return (
    <Provider container={homePageContainer} standalone>
      <Style.Head>
        <Container>
          <MainTitle />
          <Message title="Здравствуйте!">
            Хотите узнать больше о наших кредитных продуктах?
          </Message>
        </Container>
      </Style.Head>
    </Provider>
  );
};

export default observer(IndexPage);
