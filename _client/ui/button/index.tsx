import React, { ButtonHTMLAttributes, FC, memo } from 'react';

import Intent from '@specs/ui/intent';

import * as Style from './style';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: Intent,
}
const Button: FC<IButtonProps> = props => {
  const { children, type = 'button', ...rest } = props;

  return (
    <Style.Button type={type} {...rest}>
      {children}
    </Style.Button>
  );
};

Button.defaultProps = {
  intent: Intent.PRIMARY,
};

export default memo(Button);
