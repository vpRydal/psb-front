import React, { FC, memo } from 'react';

import { SizedProps } from '@client/styles/specs';
import RefreshIcons from '@icons/refresh.svg';

import * as Style from './style';

export interface ILoaderProps extends Partial<SizedProps> {
  className?: string
}
const Loader: FC<ILoaderProps> = props => {
  const {
    size,
    className,
  } = props;

  return (
    <Style.Icon Icon={RefreshIcons} size={size} className={className} />
  );
};

Loader.defaultProps = {
  className: '',
};

export default memo(Loader);
