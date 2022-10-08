import { Provider, useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import MainTitle from '@components/_common/main-title';
import Icon from '@icons';
import SearchIcon from '@icons/search.svg';
import fetchTest from '@requests/fetch-test';
import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';
import { Placement } from '@specs/ui/placement';
import LocaleStore from '@stores/_misc/locale';
import UiStore from '@stores/_misc/ui';
import Container from '@ui/container';
import Input from '@ui/form/input';

import homePageContainer from './container';
import * as Style from './style';
import { AppContainer, BgLines } from './style';

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

  const texts = ['Физическим лицом', 'Владельцем малого бизнеса'];

  return (
    <Provider container={homePageContainer} standalone>
      <Style.Head>
        <Style.AppContainer>
          <MainTitle />
          <Style.RobotMessage title="Здравствуйте!" activeAnge={Placement.LEFT_END}>
            Хотите узнать больше о наших кредитных продуктах?
            <br />
            <br />
            Если тебе больше
            {' '}
            <b>21</b>
            {' '}
            года, давай определимся:
          </Style.RobotMessage>
          <Style.InputWrapper>
            <Input LeftContent={() => <Icon Icon={SearchIcon} />} value="" placeholder="Я хочу узнать о..." />
          </Style.InputWrapper>
          <Style.MessagesWrapper>
            {texts.map(text => (
              <Style.VariantMessage intent={Intent.PRIMARY} size={Size.SM}>
                {text}
              </Style.VariantMessage>
            ))}
          </Style.MessagesWrapper>
        </Style.AppContainer>
        {ui.isDesktop && (
          <Style.BgLines />
        )}
      </Style.Head>
    </Provider>
  );
};

export default observer(IndexPage);
