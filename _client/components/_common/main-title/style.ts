import { math } from 'polished';
import styled from 'styled-components';

import { styleOnTablet } from '@client/styles/_mixins/conditions';
import { styleNotLastChild } from '@client/styles/_mixins/last-child';
import { SizedProps } from '@client/styles/specs';
import Icon from '@icons';
import Text from '@ui/_misc/text';

export const Divider = styled.span(({ theme }) => ({
  display: 'block',
  width: 5,
  height: '30px',
  background: '#fff',
  marginLeft: math(`${theme.spacing.lg} * 2`),
  marginRight: theme.spacing.xl,
}));

export const Wrapper = styled.div<SizedProps>(({ theme, size }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  ...styleNotLastChild({
    marginBottom: math(`${theme.spacing.lg} * 2 + 5`),
  }),
  ...styleOnTablet(size, {
    flexDirection: 'column',
    textAlign: 'center',
    [Divider]: {
      display: 'none',
    },
  }),
}));

export const Title = styled(Text)(({ theme }) => ({
  lineHeight: '50px',
  fontWeight: 400,
}));

export const Logo = styled(Icon)(() => ({
  fontSize: '159px',
  width: '159px',
  height: '49px',
  transform: 'translateY(-4px)',
}));
