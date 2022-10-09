import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import Intent from '@specs/ui/intent';

export const AdditionalLink = styled.span(({ theme }) => css`
  color: ${lighten(0.2, theme.color.intents[Intent.PRIMARY])};
  cursor: pointer;
  transition: color ease-in 0.2s;
  
  &:hover {
    color: ${theme.color.intents[Intent.PRIMARY]};
  }
`);
