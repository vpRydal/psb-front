import { darken, lighten } from 'polished';

import ButtonThemeFactory from '@client/styles/themes/components/button';
import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';

const buttonTheme: ButtonThemeFactory = theme => ({
  minWidth: {
    [Size.XS]: '340px',
    [Size.SM]: '340px',
    [Size.MD]: '340px',
    [Size.LG]: '340px',
    [Size.XL]: '340px',
  },
  padding: {
    [Size.XS]: '30px',
    [Size.SM]: '30px',
    [Size.MD]: '30px',
    [Size.LG]: '30px',
    [Size.XL]: '30px',
  },
  minHeight: {
    [Size.XS]: '73px',
    [Size.SM]: '73px',
    [Size.MD]: '73px',
    [Size.LG]: '73px',
    [Size.XL]: '73px',
  },
  fontSize: {
    [Size.XS]: theme.fontSize.xs,
    [Size.SM]: theme.fontSize.sm,
    [Size.MD]: theme.fontSize.md,
    [Size.LG]: theme.fontSize.lg,
    [Size.XL]: theme.fontSize.xl,
  },
  defaultSize: Size.MD,
  borderRadius: '5px',
});

export default buttonTheme;
