import { math } from 'polished';
import styled from 'styled-components';

import Message from '@ui/message';

export const Head = styled.div(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(90deg, #2B2C84 0%, #8D41BB 100%)',
  padding: `${math(`${theme.spacing.lg} * 5`)} 0`,
}));

export const BgLines = styled.div(({ theme }) => ({
  backgroundImage: 'url("/assets/images/bg-lines.png")',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100%',
  width: '500px',
}));

export const RobotMessage = styled(Message)(({ theme }) => ({
  marginBottom: `${math(`${theme.spacing.lg} * 2`)}`,
}));

export const VariantMessage = styled(Message)(({ theme }) => ({
  marginBottom: `${theme.spacing.md}`,
  marginRight: `${theme.spacing.sm}`,
}));

export const MessagesWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: `${math(`${theme.spacing.lg} * 1`)}`,
}));

export const InputWrapper = styled.div(({ theme }) => ({
  marginBottom: `${theme.spacing.md}`,
}));
