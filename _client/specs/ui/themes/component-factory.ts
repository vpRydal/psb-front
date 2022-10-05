import { ThemeBasePart } from '@specs/ui/themes/base';

type ComponentThemeFactory <T, T1 extends ThemeBasePart = ThemeBasePart> = (theme: T1) => T

export default ComponentThemeFactory;
