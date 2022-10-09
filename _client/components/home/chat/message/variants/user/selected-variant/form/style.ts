import styled from 'styled-components';

import Slider from '@ui/form/slider';
import Message from '@ui/message';

export const Wrapper = styled(Message)(() => ({
  marginBottom: 15,
}));
export const SliderField = styled(Slider)(() => ({
  marginBottom: 15,
}));
