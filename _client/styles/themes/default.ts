import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';
import IBaseTheme, { Theme } from '@specs/ui/themes/base';

const defaultTheme: IBaseTheme = {
  name: Theme.DEFAULT,
  color: {
    intents: {
      [Intent.PRIMARY]: '#ff3440',
      [Intent.SUCCESS]: '#16b29f',
      [Intent.SECONDARY]: '#606f99',
      [Intent.WARNING]: '#ff8b04',
      [Intent.DANGER]: '#ff3440',
      [Intent.INFO]: '#606f99',
    },
  },
  appSize: {
    [Size.XS]: 544,
    [Size.SM]: 768,
    [Size.MD]: 992,
    [Size.LG]: 1174,
    [Size.XL]: Number.POSITIVE_INFINITY,
  },
};

export default defaultTheme;
