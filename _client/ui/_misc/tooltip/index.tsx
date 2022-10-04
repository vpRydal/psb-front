import React, { FC, memo } from 'react';

import { IntendedProps } from '@client/styles/specs';
import { PopoverProps } from '@ui/_misc/popover';

import * as Styled from './style';

export interface TooltipProps extends Omit<PopoverProps, 'showArrow'>, Partial<IntendedProps> {
}
const Tooltip: FC<TooltipProps> = props => {
  const { children, ...rest } = props;

  return (
    <Styled.Popover {...rest} showArrow>
      {children}
    </Styled.Popover>
  );
};

export default memo(Tooltip);
