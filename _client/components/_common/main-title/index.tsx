import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import PsbLogo from '@icons/psb_logo.svg';
import Intent from '@specs/ui/intent';
import TextName from '@specs/ui/text-name';
import UiStore from '@stores/_misc/ui';

import * as Style from './style';

export interface MainTitleProps {

}
const MainTitle: FC<MainTitleProps> = props => {
  const ui = useInjection(UiStore);

  return (
    <Style.Wrapper size={ui.size}>
      <Style.Logo Icon={PsbLogo} />
      <Style.Divider />
      <Style.Title textName={TextName.TITLE_H1} intent={Intent.SECONDARY}>
        КРЕДИТНЫЙ ПОМОЩНИК
        {' '}
        <b>ПСБШКА</b>
      </Style.Title>
    </Style.Wrapper>
  );
};

export default observer(MainTitle);
