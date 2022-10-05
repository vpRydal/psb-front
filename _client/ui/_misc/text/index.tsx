import React, { FC, memo, ReactNode } from 'react';
import { useTheme } from 'styled-components';

import Intent from '@specs/ui/intent';
import TextName from '@specs/ui/text-name';

import * as Style from './style';

export interface TextProps <T extends keyof HTMLElementTagNameMap> {
  className?: string;
  textName?: TextName;
  children?: ReactNode;
  intent?: Intent;
  upper?: boolean;
  tagName?: T;
  tagProps?: React.HTMLProps<HTMLElementTagNameMap[T]>;
}
const Text: FC<TextProps<keyof HTMLElementTagNameMap>> = props => {
  const theme = useTheme();
  const {
    className,
    children,
    textName = TextName.MAIN,
    intent = Intent.PRIMARY,
    tagName = theme.components.text[textName].tagName,
    upper = theme.components.text[textName].uppercase,
    tagProps = {},
  } = props;

  return (
    <Style.Text
      textName={textName}
      className={className}
      uppercase={upper}
      as={tagName as any}
      intent={intent}
      {...tagProps}
    >
      {children}
    </Style.Text>
  );
};

export default memo(Text);
