import { stripUnit } from 'polished';
import React, {
  CSSProperties,
  ElementType, FC, memo, ReactNode, useEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { useSpring } from 'react-spring';
import { useTheme } from 'styled-components';

import { Placement } from '@specs/ui/placement';

import * as Styled from './style';

export interface PopoverProps {
  children: ReactNode;
  Content: ElementType;
  placement?: Placement;
  showOnHover?: boolean;
  show?: boolean;
  showArrow?: boolean
}
const Popover: FC<PopoverProps> = props => {
  const {
    children, Content, placement, showOnHover, show: propsShow, showArrow,
  } = props;
  const theme = useTheme();
  const targetWrapperRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const { styles, attributes } = usePopper(targetWrapperRef.current, contentWrapperRef.current, {
    placement,
    modifiers: [
      { name: 'offset', options: { offset: [0, (showArrow ? Number(stripUnit(theme.components.popover.arrowSize)) : 0)] } },
      { name: 'flip', options: { fallbackPlacements: [Placement.TOP, Placement.LEFT, Placement.RIGHT, Placement.BOTTOM] } },
      { name: 'arrow', options: { element: arrowRef.current, padding: Number(stripUnit(theme.components.popover.arrowSize)) } },
      { name: 'preventOverflow', options: { padding: 35 } },
      { name: 'eventListeners', options: { scroll: true, resize: true } },
    ],
  });
  const [show, setShow] = useState(!!propsShow);

  const isShowed = !!propsShow || show;

  const [showingStyles, showingStylesApi] = useSpring(() => ({
    from: {
      display: 'none',
      opacity: 0,
    },
    config: { duration: 200 },
  }));

  useEffect(() => {
    if (isShowed) {
      showingStylesApi({ display: 'block', opacity: 1 });
    } else {
      showingStylesApi({
        to: async next => {
          await next({ opacity: 0 });
          await next({ display: 'none' });
        },
      });
    }
  }, [isShowed]);

  // HANDLERS
  function handleMouseEnter() {
    setShow(true);
  }

  function handleMouseLeave() {
    setShow(false);
  }

  useEffect(() => {
    if (!targetWrapperRef.current) {
      return () => null;
    }

    if (showOnHover) {
      targetWrapperRef.current.addEventListener('mouseenter', handleMouseEnter, false);
      targetWrapperRef.current.addEventListener('mouseleave', handleMouseLeave, false);
    } else {
      // если поповер перестал открываться через ховер, но был открыт, то нужно закрыть его
      handleMouseLeave();
    }

    return () => {
      if (!targetWrapperRef.current) {
        return;
      }

      targetWrapperRef.current.removeEventListener('mouseenter', handleMouseEnter, false);
      targetWrapperRef.current.removeEventListener('mouseleave', handleMouseLeave, false);
    };
  }, [showOnHover]);

  return (
    <>
      <Styled.TargetWrapper ref={targetWrapperRef}>
        {children}
      </Styled.TargetWrapper>
      {createPortal(
        <Styled.ContentWrapper
          show={isShowed}
          ref={contentWrapperRef}
          style={{ ...styles.popper, ...showingStyles as unknown as CSSProperties }}
          {...attributes.popper}
        >
          <Content />
          {showArrow && <Styled.Arrow ref={arrowRef} style={styles.arrow} />}
        </Styled.ContentWrapper>,
        document.body,
      )}
    </>
  );
};

Popover.defaultProps = {
  placement: Placement.TOP,
  showOnHover: false,
  showArrow: false,
  show: false,
};

export default memo(Popover);
