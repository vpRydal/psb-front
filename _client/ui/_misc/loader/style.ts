import styled, { css, keyframes } from 'styled-components';

import { IntendedProps } from '@client/styles/specs';
import DefaultIcon from '@icons';

const rotateAnimation = keyframes`
  from {
    transform: rotate(-360deg);
  }
  to {
    transform: rotate(0);
  }
`;

export const Icon = styled(DefaultIcon)<IntendedProps>(({ intent, theme }) => css`
  animation: ${rotateAnimation} infinite 1.5s;
  color: ${theme.color.intents[intent]}
`);
