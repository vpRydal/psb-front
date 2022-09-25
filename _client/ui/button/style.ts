import styled, { css } from 'styled-components';

import Intent from '@specs/ui/intent';

export const Button = styled.button<{
  intent?: Intent
}>(({ theme, intent }) => css`
  background-color: ${theme.color.intents[intent || Intent.PRIMARY]};
`);
