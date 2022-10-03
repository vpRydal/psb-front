import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import { stripUnit } from 'polished';
import React, { ButtonHTMLAttributes, FC } from 'react';
import {
  useChain, useSpring, useSpringRef, useTransition,
} from 'react-spring';

import { IntendedProps, SizedProps } from '@client/styles/specs';
import Icon from '@icons';
import RefreshIcons from '@icons/refresh.svg';
import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';
import UiStore from '@stores/_misc/ui';
import Loader from '@ui/_misc/loader';

import * as Style from './style';

export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, Partial<IntendedProps & SizedProps> {
  isLoading?: boolean;
  isDisabled?: boolean;
}
const Button: FC<IButtonProps> = props => {
  const {
    children, type = 'button', intent = Intent.PRIMARY, size = Size.SM, isLoading, isDisabled, ...rest
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

  return (
    <Style.Button
      type={type}
      intent={intent}
      size={size}
      isLoading={isLoading!}
      isDisabled={isDisabled!}
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
        {children}
      </Style.ContentWrapper>
    </Style.Button>
  );
};

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
};

export default observer(Button);
