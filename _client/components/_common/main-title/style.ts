import { math } from 'polished';
import styled from 'styled-components';

import { styleNotLastChild } from '@client/styles/_mixins/last-child';
import Icon from '@icons';
import Text from '@ui/_misc/text';

export const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  ...styleNotLastChild({
    marginBottom: math(`${theme.spacing.lg} * 2 + 5`),
  }),
}));
export const Title = styled(Text)(() => ({
  lineHeight: '50px',
}));
export const Logo = styled(Icon)(() => ({
  fontSize: '159px',
  width: '159px',
  height: '49px',
  transform: 'translateY(-4px)',
}));
export const Divider = styled.span(({ theme }) => ({
  display: 'block',
  width: 5,
  height: '30px',
  background: '#fff',
  marginLeft: math(`${theme.spacing.lg} * 2`),
  marginRight: theme.spacing.xl,
}));
