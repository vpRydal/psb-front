import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC, ReactNode } from 'react';

import UiStore from '@stores/_misc/ui';

import * as Style from './style';

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}
const Container: FC<ContainerProps> = props => {
  const { className, children } = props;
  const uiStore = useInjection(UiStore);

  return (
    <Style.Wrapper className={className} size={uiStore.size}>
      {children}
    </Style.Wrapper>
  );
};

export default observer(Container);
