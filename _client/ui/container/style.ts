import styled from 'styled-components';

import { styleOnMinDesktop, styleOnTablet } from '@client/styles/_mixins/conditions';
import { SizedProps } from '@client/styles/specs';
import Size from '@specs/_common/size';

export const Wrapper = styled.div<SizedProps>(({ size, theme }) => ({
  width: '100%',
  ...styleOnMinDesktop(size, {
    maxWidth: theme.appSize[Size.LG],
    margin: '0 auto',
  }),
  ...styleOnTablet(size, {
    padding: '0 10px',
  }),
}));
