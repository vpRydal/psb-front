import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import PsbLogo from '@icons/psb_logo.svg';
import Intent from '@specs/ui/intent';
import TextName from '@specs/ui/text-name';

import * as Style from './style';

export interface MainTitleProps {

}
const MainTitle: FC<MainTitleProps> = props => (
  <Style.Wrapper>
    <Style.Logo Icon={PsbLogo} />
    <Style.Divider />
    <Style.Title textName={TextName.TITLE_H1} intent={Intent.SECONDARY}>
      КРЕДИТНЫЙ ПОМОЩНИК ПСБШКА
    </Style.Title>
  </Style.Wrapper>
);

export default observer(MainTitle);
