import React, { FC, memo } from 'react';

import { IntendedProps, SizedProps } from '@client/styles/specs';
import RefreshIcons from '@icons/refresh.svg';
import Intent from '@specs/ui/intent';

import * as Style from './style';

export interface ILoaderProps extends Partial<SizedProps>, Partial<IntendedProps> {
  className?: string
}
const Loader: FC<ILoaderProps> = props => {
  const {
    size,
    className,
    intent = Intent.PRIMARY,
  } = props;

  return (
    <Style.Icon Icon={RefreshIcons} size={size} className={className} intent={intent} />
  );
};

Loader.defaultProps = {
  className: '',
};

export default memo(Loader);
