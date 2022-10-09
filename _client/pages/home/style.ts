import { math } from 'polished';
import styled from 'styled-components';

import { styleOnTablet } from '@client/styles/_mixins/conditions';
import { SizedProps } from '@client/styles/specs';
import Container from '@ui/container';
import Message from '@ui/message';

export const AppContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

export const BgLines = styled.div(({ theme }) => ({
  backgroundImage: 'url("/assets/images/bg-lines.png")',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100%',
  width: '500px',
  zIndex: 0,
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

export const Messages = styled.div(({ theme }) => ({
}));

export const ContentWrapper = styled.div(({ theme }) => ({
  display: 'flex',
}));

export const BotWrapper = styled.div(({ theme }) => ({
  marginRight: `${math(`${theme.spacing.lg} * 2`)}`,
}));

export const Bot = styled.div(({ theme }) => ({
  width: '170px',
  height: '170px',
  background: 'url("/assets/images/psbshka.gif")',
  backgroundSize: 'cover',
}));

export const RobotMessage = styled(Message)<any>(({ theme }) => ({
  position: 'relative',
  marginBottom: `${math(`${theme.spacing.lg} * 2`)}`,
  [BotWrapper]: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    [Bot]: {
      height: 50,
      width: 50,
    },
  },
}));

export const Head = styled.div<SizedProps>(({ theme, size }) => ({
  position: 'relative',
  background: 'linear-gradient(90deg, #2B2C84 0%, #8D41BB 100%)',
  padding: `${math(`${theme.spacing.lg} * 5`)} 0`,
  ...styleOnTablet(size, {
    [Bot]: {
      height: 100,
      width: 100,
    },
  }),
}));
