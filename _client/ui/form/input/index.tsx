import React, {
  ChangeEvent,
  FC, FocusEvent, memo, ReactNode, useCallback, useContext, useEffect, useRef, useState,
} from 'react';
import { useSpring } from 'react-spring';

import FormFieldContext from '@ui/form/form-field-container/context';
import { InputState } from '@ui/form/input/specs';

import * as Styled from './style';

export interface InputProps extends Omit<Partial<InputState>, 'isFocused'> {
  value: string;
  className?: string;
  onChange?: (value: string, ev: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, ev: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, ev: FocusEvent<HTMLInputElement>) => void;
  RightContent?: React.ComponentType<any>
  LeftContent?: React.ComponentType<any>
  placeholder?: ReactNode
}
const Input: FC<InputProps> = props => {
  const {
    value, isValid = false, isInvalid = false, LeftContent, RightContent, className, onChange, onBlur, onFocus, placeholder,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const { onBlur: onBlurContext, onFocus: onFocusContext, id } = useContext(FormFieldContext) || {};
  const inputRef = useRef<HTMLInputElement>(null);
  const placeholderRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [placeholderStyles, placeholderStylesApi] = useSpring(() => ({
    from: {
      position: 'static',
      top: 0,
    },
    config: {
      duration: 200,
    },
  }));

  useEffect(() => {
    const wrapperWidth = wrapperRef.current?.clientHeight || 0;
    const placeholderWidth = placeholderRef.current?.clientHeight || 0;

    if (!placeholder) {
      return;
    }

    if (!value && !isFocused) {
      placeholderStylesApi({
        to: async nexet => {
          await nexet({ position: 'relative' });
          await nexet({ top: (wrapperWidth / 2) - placeholderWidth });
        },
      });
    } else {
      placeholderStylesApi({
        to: async nexet => {
          await nexet({ top: 0 });
          await nexet({ position: 'static' });
        },
      });
    }
  }, [isFocused, value]);

  // HANDLERS
  const handleBlur = useCallback((ev: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    if (onBlurContext) {
      onBlurContext();
    }

    if (onBlur) {
      onBlur(ev.target.value, ev);
    }
  }, [onBlur]);
  const handleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(ev.target.value, ev);
    }
  }, [onChange]);
  const handleFocus = useCallback((ev: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);

    if (onFocusContext) {
      onFocusContext();
    }

    if (onFocus) {
      onFocus(ev.target.value, ev);
    }
  }, [onChange]);
  const handleClickWrapper = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <Styled.Wrapper
      className={className}
      isFocused={isFocused}
      isValid={isValid}
      isInvalid={isInvalid}
      onClick={handleClickWrapper}
      ref={wrapperRef}
    >
      {LeftContent && (
        <Styled.AdditionalContentWrapper>
          <LeftContent />
        </Styled.AdditionalContentWrapper>
      )}
      <Styled.ValueWrapper>
        {placeholder && (
          <Styled.Placeholer style={placeholderStyles} ref={placeholderRef}>
            {placeholder}
          </Styled.Placeholer>
        )}
        <Styled.Input ref={inputRef} value={value} onBlur={handleBlur} onChange={handleChange} onFocus={handleFocus} id={id} />
      </Styled.ValueWrapper>
      {RightContent && (
        <Styled.AdditionalContentWrapper>
          <RightContent />
        </Styled.AdditionalContentWrapper>
      )}
    </Styled.Wrapper>
  );
};

export default memo(Input);
