import buttonTheme from '@client/styles/themes/components/button';
import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';
import IBaseTheme, { Theme, ThemeBasePart, ThemeComponentsPart } from '@specs/ui/themes/base';

const baseThemePart: ThemeBasePart = {
  name: Theme.DEFAULT,
  animationDuration: '0.2s',
  disableOpacity: 0.7,
  color: {
    intents: {
      [Intent.PRIMARY]: '#ff3440',
      [Intent.SUCCESS]: '#16b29f',
      [Intent.SECONDARY]: '#606f99',
      [Intent.WARNING]: '#ff8b04',
      [Intent.DANGER]: '#ff3440',
      [Intent.INFO]: '#606f99',
    },
    font: {
      [Intent.PRIMARY]: '#000000',
      [Intent.SECONDARY]: '#606f99',
    },
  },
  appSize: {
    [Size.XS]: 544,
    [Size.SM]: 768,
    [Size.MD]: 992,
    [Size.LG]: 1174,
    [Size.XL]: Number.POSITIVE_INFINITY,
  },
  fontSize: {
    [Size.XS]: '10px',
    [Size.SM]: '12px',
    [Size.MD]: '14px',
    [Size.LG]: '16px',
    [Size.XL]: '18px',
  },
  iconSize: {
    [Size.XS]: '14px',
    [Size.SM]: '18px',
    [Size.MD]: '22px',
    [Size.LG]: '26px',
    [Size.XL]: '30px',
  },
  spacing: {
    [Size.XS]: '5px',
    [Size.SM]: '10px',
    [Size.MD]: '15px',
    [Size.LG]: '20px',
    [Size.XL]: '25px',
  },
};
const componentsThemePart: ThemeComponentsPart = {
  components: {
    button: buttonTheme(baseThemePart),
  },
};

const defaultTheme: IBaseTheme = {
  ...baseThemePart,
  ...componentsThemePart,
};

export default defaultTheme;
