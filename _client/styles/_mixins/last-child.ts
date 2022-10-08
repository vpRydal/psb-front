import { CSSObject } from 'styled-components';

export function styleNotLastChild(styles: CSSObject): CSSObject {
  return {
    '&:not(:last-child)': styles,
  };
}
