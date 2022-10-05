import styled from 'styled-components';

import { IntendedProps } from '@client/styles/specs';
import TextName from '@specs/ui/text-name';

export const Text = styled.span<{ textName: TextName; uppercase: boolean } & IntendedProps>(({
  textName, theme, uppercase, intent: intentProp,
}) => {
  const {
    fontSize, weight, intent, color,
  } = theme.components.text[textName];

  return {
    fontSize,
    fontWeight: weight,
    textTransform: uppercase ? 'uppercase' : 'unset',
    color: intent?.[intentProp] || color,
  };
});
