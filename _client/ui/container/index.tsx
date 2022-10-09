import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC, ReactNode } from 'react';

import UiStore from '@stores/_misc/ui';

import * as Style from './style';

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}
const Container = observer<ContainerProps, HTMLDivElement>((props, ref) => {
  const { className, children } = props;
  const uiStore = useInjection(UiStore);

  return (
    <Style.Wrapper className={className} size={uiStore.size} ref={ref}>
      {children}
    </Style.Wrapper>
  );
}, { forwardRef: true });

export default Container;
