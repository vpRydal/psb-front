import uniqueId from 'lodash/uniqueId';
import * as React from 'react';
import {
  FC, memo, ReactNode, useCallback, useMemo, useState,
} from 'react';

import Intent from '@specs/ui/intent';
import { Placement } from '@specs/ui/placement';
import { FieldStore } from '@stores/_misc/field';
import Tooltip from '@ui/_misc/tooltip';

import FormFieldContext from './context';
import * as Styled from './style';

export interface FormFieldContainerProps {
  field: FieldStore<any>
  label?: ReactNode,
  children: ReactNode,
  description?: ReactNode;
  colsSpan?: number;
  className?: string
}

const FormFieldContainer: FC<FormFieldContainerProps> = props => {
  const {
    children,
    description,
    label,
    className,
    field,
    colsSpan = 1,
  } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const id = useMemo(() => uniqueId('form-input-'), []);

  // HANDLERS
  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  // RENDERERS
  function renderLabel() {
    if (!label) {
      return null;
    }

    return (
      <Styled.LabelWrapper>
        <Styled.Label
          htmlFor={id}
        >
          {label}
        </Styled.Label>
      </Styled.LabelWrapper>
    );
  }

  function renderInvalidMessage() {
    return (
      <Styled.InvalidMessage>
        {field.errors[0]}
      </Styled.InvalidMessage>
    );
  }

  function renderChildren() {
    return (
      <Tooltip
        intent={Intent.DANGER}
        placement={Placement.TOP}
        showOnHover={!isFocused && !field.isValid}
        Content={renderInvalidMessage}
      >
        {children}
      </Tooltip>
    );
  }

  function renderDescription() {
    if (!description) {
      return null;
    }

    return (
      <Styled.Description>
        {description}
      </Styled.Description>
    );
  }

  return (
    <Styled.StyledFormField
      isFocused={isFocused}
      className={className}
      colsSpan={colsSpan}
    >
      {renderLabel()}
      <FormFieldContext.Provider value={{
        id,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
      }}
      >
        {renderChildren()}
      </FormFieldContext.Provider>
      {renderDescription()}
    </Styled.StyledFormField>
  );
};

export default memo(FormFieldContainer);
