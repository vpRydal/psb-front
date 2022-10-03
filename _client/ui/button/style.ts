import { darken, lighten } from 'polished';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

import { IntendedProps, SizedProps } from '@client/styles/specs';
import Intent from '@specs/ui/intent';

export const LoadingIconWrapper = styled(animated.div)(() => css`
  display: inline-block;
`);

export const ContentWrapper = styled.div(() => css`
  position: relative;
  z-index: 1;
  display: inline-block;
  text-align: center;
  flex: 1;
`);

export const Button = styled.button<IntendedProps & SizedProps & { isLoading: boolean, isDisabled: boolean }>(({
  theme, intent, size, isLoading, isDisabled,
}) => css`
  background-color: ${theme.color.intents[intent]};
  display: inline-flex;
  align-items: center;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border: 0;
  font-size: ${theme.components.button.fontSize[size]};
  min-height: ${theme.components.button.minHeight[size]};
  min-width: ${theme.components.button.minWidth[size]};
  outline: none;
  user-select: none;
  width: fit-content;
  line-height: 1;
  cursor: pointer;
  transition: background-color ease-in ${theme.animationDuration};
  color: ${theme.color.font[Intent.PRIMARY]};


  ${isDisabled && css`
    cursor: default;
    opacity: ${theme.disableOpacity};
  `}


  ${isLoading && css`
    cursor: wait;

    ${ContentWrapper} {
      text-align: left;
    }
    ${LoadingIconWrapper} {
      text-align: left;
    }
  `}
  
  ${!(isDisabled || isLoading) && css`
    &:hover {
      background-color: ${lighten(0.06, theme.color.intents[intent])};
    }

    &:focus {
      background-color: ${darken(0.06, theme.color.intents[intent])};
    }
  `}
`);
