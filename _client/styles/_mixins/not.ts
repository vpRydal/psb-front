import { CSSObject } from 'styled-components';

export function styleNot(styles: CSSObject): CSSObject {
  return {
    '&not()': styles,
  };
}
