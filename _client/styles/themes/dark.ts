import defaultTheme from '@client/styles/themes/default';
import Intent from '@specs/ui/intent';
import IBaseTheme, { Theme } from '@specs/ui/themes/base';

const darkTheme: IBaseTheme = {
  ...defaultTheme,
  name: Theme.DARK,
  color: {
    intents: {
      [Intent.PRIMARY]: '#16b29f',
      [Intent.SUCCESS]: '#16b29f',
      [Intent.SECONDARY]: '#606f99',
      [Intent.WARNING]: '#ff8b04',
      [Intent.DANGER]: '#ff3440',
      [Intent.INFO]: '#606f99',
    },
    font: defaultTheme.color.font,
  },
};

export default darkTheme;
