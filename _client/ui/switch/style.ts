import { math } from 'polished';
import styled from 'styled-components';

import Intent from '@specs/ui/intent';

export const Wrapper = styled.div(({ theme }) => ({
  backgroundColor: '#F0F0F7',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  height: 66,
  border: `solid 3px ${'#F0F0F7'}`,
  borderRadius: 8,
  color: 'black',
  position: 'relative',
}));

export const Value = styled.div(({ theme }) => ({
  padding: `${theme.spacing.lg} ${math(`${theme.spacing.lg} * 2`)}`,
  position: 'relative',
}));

export const SelectionIndicator = styled.span(({ theme }) => ({
  display: 'block',
  backgroundColor: theme.color.backgrounds[Intent.PRIMARY],
  borderRadius: 8,
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  zIndex: 0,
}));
