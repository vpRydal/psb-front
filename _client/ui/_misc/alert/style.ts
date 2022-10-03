import { darken, opacify, transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { IntendedProps } from '@client/styles/specs';

export const Wrapper = styled.div<IntendedProps>(({ theme, intent }) => css`
  background-color: ${transparentize(0.5, theme.color.intents[intent])};
  border: 1px solid ${darken(0.1, theme.color.intents[intent])};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md}; 
  font-size: ${theme.fontSize.md};  
  color: ${darken(0.4, theme.color.intents[intent])};
`);
