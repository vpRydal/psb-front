import { darken, lighten } from 'polished';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

import { IntendedProps, SizedProps } from '@client/styles/specs';
import DefaultText from '@ui/_misc/text';

export const LoadingIconWrapper = styled(animated.div)(({ theme }) => css`
  display: flex;
  margin-right: auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: ${theme.components.button.borderRadius};
`);

export const ContentWrapper = styled(animated.div)(() => css`
  display: inline-flex;
  text-align: center;
  flex: 1;
`);

export const Text = styled(DefaultText)(() => ({
  margin: '0 auto',
}));

export const TextLoader = styled(DefaultText)(() => ({
}));

export const Button = styled.button<IntendedProps & SizedProps & { isLoading: boolean, isDisabled: boolean }>(({
  theme, intent, size, isLoading, isDisabled,
}) => {
  const bg = theme.components.button.background?.[intent];
  const intentColor = theme.color.intents[intent];

  return css`
    position: relative;
  background-color: ${bg?.default || intentColor};
  display: inline-flex;
  align-items: center;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border: 0;
  min-height: ${theme.components.button.minHeight[size]};
  min-width: ${theme.components.button.minWidth[size]};
  outline: none;
  user-select: none;
  width: fit-content;
  cursor: pointer;
  transition: background-color ease-in ${theme.animationDuration};
  border-radius: ${theme.components.button.borderRadius};

  ${isDisabled && css`
    cursor: default;
    opacity: ${theme.disableOpacity};
  `}

  ${isLoading && css`
    cursor: wait;
  `}
  
  ${!(isDisabled || isLoading) && css`
    &:hover {
      background-color: ${bg?.hover || lighten(0.06, intentColor)};
    }

    &:focus {
      background-color: ${bg?.focus || darken(0.06, intentColor)};
    }
  `}
`;
});
