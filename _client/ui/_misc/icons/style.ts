import styled from 'styled-components';

import { SizedProps } from '@client/styles/specs';

export const IconWrapper = styled.span<SizedProps>(({ theme, size }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: theme.iconSize[size],
  verticalAlign: 'middle',
  svg: {
    fill: 'currentcolor',
    width: '1em',
    height: '1em',

  },
}));
