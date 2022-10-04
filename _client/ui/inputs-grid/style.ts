import styled from 'styled-components';

import {
  styleIf, styleOnMinDesktop, styleOnMinTablet, styleOnMobile,
} from '@client/styles/_mixins/conditions';
import { SizedProps } from '@client/styles/specs';

export interface ColsProps {
  colsTablet?: number;
  colsMobile?: number;
  colsDesktop?: number;
  colsSpacing?: number
}

export const Wrapper = styled.div<SizedProps & ColsProps>(({
  size, colsMobile, colsTablet, colsDesktop, colsSpacing,
}) => ({
  display: 'grid',
  ...styleOnMobile(size, {
    gridTemplateColumns: `repeat(${colsMobile}, 1fr)`,
    ...styleIf(colsMobile !== 1, {
      gridColumnGap: colsSpacing,
    }),
  }),
  ...styleOnMinTablet(size, {
    gridTemplateColumns: `repeat(${colsTablet}, 1fr)`,
    ...styleIf(colsTablet !== 1, {
      gridColumnGap: colsSpacing,
    }),
  }),
  ...styleOnMinDesktop(size, {
    gridTemplateColumns: `repeat(${colsDesktop}, 1fr)`,
    ...styleIf(colsDesktop !== 1, {
      gridColumnGap: colsSpacing,
    }),
  }),
}));

export const DummyChild = styled.div(() => ({
  display: 'none',
}));
