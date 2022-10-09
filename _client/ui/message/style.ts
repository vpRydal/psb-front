import { darken, math } from 'polished';
import styled, { CSSProperties } from 'styled-components';

import { styleIf } from '@client/styles/_mixins/conditions';
import { IntendedProps, SizedProps } from '@client/styles/specs';
import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';
import { Placement } from '@specs/ui/placement';

function mapAngle(angle?: Placement): CSSProperties {
  const borderRagius: CSSProperties = {
    borderTopLeftRadius: angle === Placement.LEFT_START ? 5 : 20,
    borderBottomLeftRadius: angle === Placement.LEFT_END ? 5 : 20,
    borderTopRightRadius: angle === Placement.RIGHT_START ? 5 : 20,
    borderBottomRightRadius: angle === Placement.RIGHT_END ? 5 : 20,
  };

  return borderRagius;
}

export const Wrapper = styled.div<SizedProps & Partial<IntendedProps> & {
  activeAnge?: Placement,
  isClickable: boolean,
  isSelected: boolean
}>(({
  theme, size, intent, activeAnge, isClickable, isSelected,
}) => ({
  backgroundColor: intent ? theme.color.intents[intent] : theme.color.backgrounds[Intent.SECONDARY],
  padding: {
    [Size.XS]: `${theme.spacing.md} ${theme.spacing.lg}`,
    [Size.SM]: `${theme.spacing.md} ${theme.spacing.lg}`,
    [Size.MD]: `${math(`${theme.spacing.md} * 2`)} ${math(`${theme.spacing.xl} * 2`)}`,
    [Size.LG]: `${theme.spacing.md} ${theme.spacing.lg}`,
    [Size.XL]: `${theme.spacing.md} ${theme.spacing.lg}`,
  }[size],
  ...mapAngle(activeAnge),
  ...styleIf(isClickable, {
    cursor: 'pointer',
  }),
  ...styleIf(isSelected, {
    cursor: 'not-allowed',
    backgroundColor: darken(0.2, intent ? theme.color.intents[intent] : theme.color.backgrounds[Intent.SECONDARY]),
  }),
}));
