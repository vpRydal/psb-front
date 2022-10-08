import { animated } from 'react-spring';
import styled from 'styled-components';

import TextName from '@specs/ui/text-name';
import Text from '@ui/_misc/text';
import { InputState } from '@ui/form/input/specs';

export const Wrapper = styled.div<InputState>(({ theme }) => {
  const {
    padding, maxHeight, borderColor, borderRadius,
  } = theme.components.input;
  const {
    color, fontSize, fontName, weight,
  } = theme.components.text[TextName.INPUT];
  return {
    position: 'relative',
    padding,
    maxHeight,
    color,
    fontSize,
    fontFamily: fontName,
    fontWeight: weight,
    border: `1px solid ${borderColor}`,
    borderRadius,
    display: 'flex',
    cursor: 'text',
    height: maxHeight,
  };
});

export const AdditionalContentWrapper = styled.div(() => ({
}));

export const ValueWrapper = styled.div<any>(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: '100%',
}));

export const Placeholer = styled(animated.span)<any>(({ theme }) => {
  const {
    fontSize, weight, intent, color, fontName,
  } = theme.components.text[TextName.INPUT_LABEL];
  return {
    fontSize,
    fontFamily: fontName,
    fontWeight: weight,
    color,
  };
});

export const Input = styled.input<any>(() => ({
  border: 0,
  display: 'block',
  background: 0,
  transform: 'translateY(5px)',
  '&:focus-visible': {
    border: 0,
    outline: 0,
  },
}));
