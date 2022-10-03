import styled, { css, keyframes } from 'styled-components';

import DefaultIcon from '@icons';

const rotateAnimation = keyframes`
  from {
    transform: rotate(-360deg);
  }
  to {
    transform: rotate(0);
  }
`;

export const Icon = styled(DefaultIcon)(() => css`
  animation: ${rotateAnimation} infinite 1.5s;
`);
