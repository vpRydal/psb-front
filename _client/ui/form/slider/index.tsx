import isArray from 'lodash/isArray';
import { observer } from 'mobx-react-lite';
import SliderReact from 'rc-slider';
import React, { FC, ReactNode } from 'react';
import 'rc-slider/assets/index.css';

import TextName from '@specs/ui/text-name';
import Text from '@ui/_misc/text';

import * as Style from './style';

export interface SliderProps {
  className?: string;
  min?: number;
  max: number;
  value: number;
  isDisabled?: boolean;
  placeholder?: ReactNode;
  label?: ReactNode;
  onChange: (value: number) => void
}
const Slider:FC<SliderProps> = props => {
  const {
    min = 0, max, value, onChange, placeholder, className, label, isDisabled = false,
  } = props;

  return (
    <Style.Wrapper className={className} isDisabled={isDisabled}>
      <Style.InfoWrapper>
        {placeholder && (
          <Style.Placeholder textName={TextName.INPUT_LABEL}>{placeholder}</Style.Placeholder>
        )}
        <Style.Value>{value}</Style.Value>
        <Text textName={TextName.INPUT_LABEL}>{label}</Text>
      </Style.InfoWrapper>
      <SliderReact
        disabled={isDisabled}
        onChange={_value => onChange(isArray(_value) ? _value[0] : _value)}
        min={min}
        included
        max={max}
        value={value}
      />
      <Style.Bottom>
        <Text textName={TextName.INPUT_LABEL}>{min}</Text>
        <Text textName={TextName.INPUT_LABEL}>{max}</Text>
      </Style.Bottom>
    </Style.Wrapper>
  );
};

export default observer(Slider);
