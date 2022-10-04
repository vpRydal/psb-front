import { lighten } from 'polished';
import styled from 'styled-components';

import { IntendedProps } from '@client/styles/specs';
import DefaultPopover from '@ui/_misc/popover';
import * as PopoverStyles from '@ui/_misc/popover/style';

export const Popover = styled(DefaultPopover)<Partial<IntendedProps>>(({ intent, theme }) => ({
  '&.popover-target-wrapper': {
    display: 'block',
  },
  '&.popover-content-wrapper': {
    backgroundColor: intent ? lighten(0.2, theme.color.intents[intent]) : theme.components.tooltip.defaultBackgroundColor,
    color: intent ? theme.color.intents[intent] : theme.components.tooltip.defaultColor,
    [PopoverStyles.Arrow]: {
      '&:before': {
        backgroundColor: intent ? lighten(0.2, theme.color.intents[intent]) : theme.components.tooltip.defaultBackgroundColor,
      },
    },
  },
}));
