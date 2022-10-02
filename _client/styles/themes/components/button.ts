import { SizeMap } from '@client/styles/specs';
import Size from '@specs/_common/size';
import { ThemeBasePart } from '@specs/ui/themes/base';

export type ButtonTheme = {
  minHeight: SizeMap,
  minWidth: SizeMap,
  fontSize: SizeMap
}

const buttonTheme = (theme: ThemeBasePart): ButtonTheme => ({
  minWidth: {
    [Size.XS]: '80px',
    [Size.SM]: '100px',
    [Size.MD]: '110px',
    [Size.LG]: '110px',
    [Size.XL]: '120px',
  },
  minHeight: {
    [Size.XS]: '30px',
    [Size.SM]: '30px',
    [Size.MD]: '35px',
    [Size.LG]: '40px',
    [Size.XL]: '45px',
  },
  fontSize: {
    [Size.XS]: theme.fontSize.xs,
    [Size.SM]: theme.fontSize.sm,
    [Size.MD]: theme.fontSize.md,
    [Size.LG]: theme.fontSize.lg,
    [Size.XL]: theme.fontSize.xl,
  },
});

export default buttonTheme;
