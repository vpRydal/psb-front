import { CSSObject } from 'styled-components';

import Size from '@specs/_common/size';

const {
  LG, MD, SM, XS, XL,
} = Size;

/** True - если размер - НЕ перевернутый Телефон  */
export function isMobileVertical(size: Size): boolean {
  return ([XS] as Size[]).includes(size);
}
/** True - если размер - перевернутый Телефон  */
export function isMobileHorizontal(size: Size): boolean {
  return ([SM] as Size[]).includes(size);
}
/** True - если размер - Телефон  */
export function isMobile(size: Size): boolean {
  return ([XS, SM] as Size[]).includes(size);
}
/** True - если размер - Планшет  */
export function isTablet(size: Size): boolean {
  return ([XS, SM, MD] as Size[]).includes(size);
}
/** True - если размер от Десктопа  */
export function isMinTablet(size: Size): boolean {
  return ([MD, LG, XL] as Size[]).includes(size);
}
/** True - если размер от Планшета (включая Десктоп) */
export function isMinDesktop(size: Size): boolean {
  return ([LG, XL] as Size[]).includes(size);
}

/** Возвращает стили если... */
export function styleIf(bool: boolean, styles: CSSObject): CSSObject {
  return bool ? styles : {};
}

/** Возвращает стили, если размер - НЕ перевернутый Телефон */
export function styleOnMobileVertical(size: Size, styles: CSSObject): CSSObject {
  return styleIf(isMobileVertical(size), styles);
}

/** Возвращает стили, если размер - перевернутый Телефон */
export function styleOnMobileHorizontal(size: Size, styles: CSSObject): CSSObject {
  return styleIf(isMobileHorizontal(size), styles);
}

/** Возвращает стили, если размер - Телефон */
export function styleOnMobile(size: Size, styles: CSSObject): CSSObject {
  return styleIf(isMobile(size), styles);
}

/** Возвращает стили, если размер - Планшет (включая телефон) */
export function styleOnTablet(size: Size, styles: CSSObject): CSSObject {
  return styleIf(isTablet(size), styles);
}

/** Возвращает стили, если размер - от Планшета (включая Десктоп) */
export function styleOnMinTablet(size: Size, styles: CSSObject): CSSObject {
  return styleIf(isMinTablet(size), styles);
}

/** Возвращает стили, если размер - от Десктопа */
export function styleOnMinDesktop(size: Size, styles: CSSObject): CSSObject {
  return styleIf(isMinDesktop(size), styles);
}
