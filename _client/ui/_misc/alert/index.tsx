import React, {
  forwardRef, memo, ReactNode,
} from 'react';

import { IntendedProps } from '@client/styles/specs';
import Intent from '@specs/ui/intent';

import * as Style from './style';

export interface AlertProps extends Partial<IntendedProps> {
  className?: string;
  children: ReactNode
}
const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    className,
    children,
    intent = Intent.PRIMARY,
  } = props;

  return (
    <Style.Wrapper className={className} intent={intent} ref={ref}>
      {children}
    </Style.Wrapper>
  );
});

Alert.defaultProps = {
  className: '',
};

export default memo(Alert);
