import React, { FC, memo, ReactNode } from 'react';

import { IntendedProps, SizedProps } from '@client/styles/specs';
import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';
import { Placement } from '@specs/ui/placement';
import TextName from '@specs/ui/text-name';
import Text from '@ui/_misc/text';

import * as Style from './style';

export interface MessageProps extends Partial<IntendedProps>, Partial<SizedProps> {
  className?: string;
  title?: ReactNode;
  children?: ReactNode;
  activeAnge?: Placement
}
const Message: FC<MessageProps> = props => {
  const {
    className, intent, title, children, size = Size.MD, activeAnge = Placement.LEFT_START,
  } = props;

  return (
    <Style.Wrapper className={className} intent={intent} size={size} activeAnge={activeAnge}>
      {title && (<Text textName={TextName.MESSAGE_TITLE} intent={intent || Intent.SECONDARY}>{title}</Text>) }
      {children && (<Text textName={TextName.MESSAGE_TEXT} intent={intent || Intent.SECONDARY}>{children}</Text>) }
    </Style.Wrapper>
  );
};

export default memo(Message);
