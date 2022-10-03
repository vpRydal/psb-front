import styled from 'styled-components';

import DefaultAlert from '@ui/_misc/alert';
import DefaultLoader from '@ui/_misc/loader';

export const Loader = styled(DefaultLoader)(() => ({
  display: 'block',
  margin: '0 auto',
}));

export const ContentWrapper = styled.div(() => ({
}));

export const Alert = styled(DefaultAlert)(() => ({
  '&:last-child': {
    marginBottom: 0,
  },
}));

export const MessageText = styled.span(() => ({
  color: 'inherit',
  '&:not(:last-child)': {
    marginBottom: '0.5 rem',
  },
}));

export const Overlay = styled.div<any>(() => ({
  position: 'relative',
  height: 'fit-content',
}));

export const OverlaySpinnerWrapper = styled.div<any>(() => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 3,
}));

export const OverlayBlurWrapper = styled(OverlaySpinnerWrapper)(() => ({
  backdropFilter: 'blur(2px)',
  zIndex: 2,
}));
