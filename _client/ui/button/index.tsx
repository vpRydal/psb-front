import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import { stripUnit } from 'polished';
import React, { ButtonHTMLAttributes, FC } from 'react';
import {
  useChain, useSpring, useSpringRef, useTransition,
} from 'react-spring';
import { useTheme } from 'styled-components';

import { IntendedProps, SizedProps } from '@client/styles/specs';
import Intent from '@specs/ui/intent';
import TextName from '@specs/ui/text-name';
import UiStore from '@stores/_misc/ui';
import Loader from '@ui/_misc/loader';

import * as Style from './style';

export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, Partial<IntendedProps & SizedProps> {
  isLoading?: boolean;
  isDisabled?: boolean;
  textName?: TextName;
}
const Button: FC<IButtonProps> = props => {
  const theme = useTheme();
  const {
    children, type = 'button', intent = Intent.PRIMARY,
    isLoading = false,
    isDisabled = false,
    size = theme.components.button.defaultSize,
    textName = TextName.BUTTON,
    ...rest
  } = props;
  const ui = useInjection(UiStore);

  const loaderOpacityRef = useSpringRef();
  const loaderWidthRef = useSpringRef();

  const loaderWithAnimationStyles = useSpring({
    ref: loaderWidthRef,
    width: isLoading ? stripUnit(ui.theme.iconSize[size]) : 0,
    marginRight: isLoading ? stripUnit(ui.theme.spacing.sm) : 0,
  });

  const loaderOpacityTransition = useTransition(isLoading, {
    ref: loaderOpacityRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isLoading,
  });

  const animationQueue = [loaderOpacityRef, loaderWidthRef];

  useChain(animationQueue, isLoading ? [1, 0] : [0, 1.5], 200);

  // RENDERERS
  function renderChildren() {
    return (
      <Style.Text textName={textName}>
        {children}
      </Style.Text>
    );
  }

  return (
    <Style.Button
      type={type}
      intent={intent}
      size={size}
      isLoading={isLoading}
      isDisabled={isDisabled}
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {loaderOpacityTransition((styles, item) => item && (
        <>
          <Style.LoadingIconWrapper style={{ ...styles, ...loaderWithAnimationStyles }}>
            <Loader size={size} />
          </Style.LoadingIconWrapper>
        </>
      ))}
      <Style.ContentWrapper>
        {renderChildren()}
      </Style.ContentWrapper>
    </Style.Button>
  );
};

export default observer(Button);
