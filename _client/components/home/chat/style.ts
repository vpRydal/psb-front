import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

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
export const Content = styled.div(() => css`
  display: flex;
`);
export const BotTrack = styled.div(() => css`
  margin-right: 40px;
  display: flex;
  position: relative;
  width: 170px;
`);
export const Bot = styled(animated.div)(() => css`
  background: url("/assets/images/psbshka.gif");
  background-size: contain;
  position: absolute;
  height: 170px;
  width: 170px;
  bottom: 100px;
`);

export const ChatTrack = styled.div(() => css`
`);
