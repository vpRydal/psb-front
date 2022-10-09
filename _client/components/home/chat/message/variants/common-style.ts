import { math } from 'polished';
import styled, { css } from 'styled-components';

import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';
import Message from '@ui/message';

export const Wrapper = styled.div(() => css`
`);

export const BigMessage = styled(Message)(({ theme }) => css`
  margin-bottom: ${theme.spacing.md};
`);

export const ReplyVariantsWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: `${math(`${theme.spacing.lg} * 1`)}`,
}));

export const ReplyVariantMessage = styled(Message).attrs(props => ({
  ...props,
}))(({ theme }) => ({
  marginBottom: `${theme.spacing.md}`,
  marginRight: `${theme.spacing.sm}`,
}));
