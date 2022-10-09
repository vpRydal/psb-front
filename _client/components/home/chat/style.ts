import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

import { styleOnMobile, styleOnTablet } from '@client/styles/_mixins/conditions';
import { SizedProps } from '@client/styles/specs';
import Container from '@ui/container';

export const Wrapper = styled.div(() => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(90deg, #2B2C84 0%, #8D41BB 100%);
  overflow-y: auto;
`);

export const AppContainer = styled(Container)(() => css`
  padding-top: 200px;
  overflow-y: auto;
`);
export const BotTrack = styled.div(() => css`
  margin-right: 40px;
  display: flex;
  position: relative;
  width: 200px;
  justify-content: center;
`);
export const Bot = styled(animated.div)(() => css`
  background: url("/assets/images/psbshka.gif");
  background-size: contain;
  position: absolute;
  height: 170px;
  width: 170px;
  bottom: 100px;
`);

export const Content = styled.div<SizedProps>(({ size }) => ({
  display: 'flex',
  ...styleOnTablet(size, {
    [BotTrack]: {
      marginRight: 20,
    },
    [Bot]: {
      width: 100,
      height: 100,
      bottom: 200,
    },
  }),
  ...styleOnMobile(size, {
    [Bot]: {
      width: 80,
      height: 80,
      bottom: 300,
    },
  }),
}));

export const ChatTrack = styled.div(() => css`
`);
