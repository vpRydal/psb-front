import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import Intent from '@specs/ui/intent';
import { Placement } from '@specs/ui/placement';
import Text from '@ui/_misc/text';
import { mapAngle } from '@ui/message/style';

export const Wrapper = styled.div(({ theme }) => css`
  background-color: #ffffff;
  padding-bottom: 0;
  padding-right: 0;
  padding-left: 0;
  padding-top: 30px;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 5px;
  .rc-slider {
    transform: translateY(5px);
    
    &-rail {
      position: absolute;
      width: 100%;
      background-color: rgba(211, 211, 211, 0.5);
      height: 4px;
      border-radius: 1px;
    }

    &-track {
      position: absolute;
      left: 0;
      height: 4px;
      border-radius: 1px;
      background-color: ${theme.color.intents[Intent.PRIMARY]};
    }

    &-handle {
      position: absolute;
      width: 14px;
      height: 14px;
      cursor: pointer;
      margin-top: -5px;
      border-radius: 50%;
      border: solid 2px ${theme.color.intents[Intent.PRIMARY]};
      background-color: ${theme.color.intents[Intent.PRIMARY]};
      touch-action: pan-x;

      &:focus {
        outline: none;
      }

      &-click-focused:focus {
        border-color: white;
        box-shadow: unset;
      }

      &:hover {
        border-color: ${theme.color.intents[Intent.PRIMARY]};
      }

      &:active {
        border-color: ${theme.color.intents[Intent.PRIMARY]};
        box-shadow: 0 0 5px ${lighten(0.3, theme.color.intents[Intent.PRIMARY])};
        cursor: grabbing;
      }
    }
  }
`);

export const Value = styled(Text)(({ theme }) => css`
  display: block;
`);

export const Placeholder = styled(Text)(({ theme }) => css`
  display: block;
  position: absolute;
  top: -25px

`);

export const InfoWrapper = styled.div(({ theme }) => css`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
`);

export const Bottom = styled.div(({ theme }) => ({
  backgroundColor: '#E5E5E5',
  display: 'flex',
  justifyContent: 'space-between',
  ...mapAngle(Placement.RIGHT_END),
  padding: '0 30px 30px 30px',
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
}));
