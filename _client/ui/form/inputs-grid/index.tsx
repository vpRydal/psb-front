import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import { stripUnit } from 'polished';
import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import UiStore from '@stores/_misc/ui';

import * as Styled from './style';
import { ColsProps } from './style';

export interface IInputsGridProps extends ColsProps {
  children: ReactNode[] | ReactNode;
  disableDummyChild?: boolean;
}
const InputsGrid = observer<IInputsGridProps>(props => {
  const theme = useTheme();
  const {
    children, colsTablet = 1, colsMobile = 1, colsDesktop = 1, colsSpacing = Number(stripUnit(theme.spacing.sm)), disableDummyChild,
  } = props;
  const uiStore = useInjection(UiStore);

  return (
    <Styled.Wrapper size={uiStore.size} colsTablet={colsTablet} colsMobile={colsMobile} colsDesktop={colsDesktop} colsSpacing={colsSpacing}>
      {children}
      {
        !disableDummyChild && (
          <Styled.DummyChild />
        )
      }
    </Styled.Wrapper>
  );
});

export {
  InputsGrid,
};
