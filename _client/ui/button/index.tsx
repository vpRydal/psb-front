import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { ButtonHTMLAttributes, FC } from 'react';
import { useTransition } from 'react-spring';
import { useTheme } from 'styled-components';

import { IntendedProps, SizedProps } from '@client/styles/specs';
import Size from '@specs/_common/size';
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

  const loaderOpacityTransition = useTransition(isLoading, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isLoading,
    config: {
      duration: 200,
    },
  });

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
        <Style.LoadingIconWrapper style={{ ...styles }}>
          <Loader size={theme.components.button.iconSize[size]} />
        </Style.LoadingIconWrapper>
      ))}
      <Style.ContentWrapper>
        {renderChildren()}
      </Style.ContentWrapper>
    </Style.Button>
  );
};

export default observer(Button);
