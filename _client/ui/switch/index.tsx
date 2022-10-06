import React, {
  FC, memo, useRef, useState,
} from 'react';

import * as Style from './style';
import { SelectionIndicator } from './style';

export interface SwitchProps {
  className?: string
}
const Switch: FC<SwitchProps> = props => {
  const { className } = props;
  const [firstValueRef, setFirstValueRef] = useState<HTMLDivElement | null>(null);

  console.log(firstValueRef?.clientWidth);

  return (
    <Style.Wrapper className={className}>
      <SelectionIndicator style={{ width: firstValueRef?.clientWidth }} />
      <Style.Value ref={setFirstValueRef}>Крудит</Style.Value>
      <Style.Value>Вклад</Style.Value>
    </Style.Wrapper>
  );
};

export default memo(Switch);
