import styled, { css, keyframes } from 'styled-components';

export const Page = styled.div<any>(() => ({
  textAlign: 'center',
}));

export const Header = styled.header<any>(() => css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`);

export const Link = styled.a<any>(() => css`
  color: #61dafb;
`);

const logoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img<any>(() => css`
  animation: ${logoAnimation} infinite 20s linear;
`);
