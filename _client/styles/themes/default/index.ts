import buttonTheme from '@client/styles/themes/default/components/button';
import popoverTheme from '@client/styles/themes/default/components/popover';
import textTheme from '@client/styles/themes/default/components/text';
import tooltipTheme from '@client/styles/themes/default/components/tooltip';
import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';
import IBaseTheme, { Theme, ThemeBasePart, ThemeComponentsPart } from '@specs/ui/themes/base';

export const baseThemePart: ThemeBasePart = {
  name: Theme.DEFAULT,
  animationDuration: '0.2s',
  disableOpacity: 0.7,
  shadow: '0px 4px 30px 0px #0000001A',
  fontNames: {
    Gilroy: 'Gilroy',
  },
  color: {
    backgrounds: {
      [Intent.PRIMARY]: '#FFFFFF',
      [Intent.SECONDARY]: '#F8F8FC',
    },
    intents: {
      [Intent.PRIMARY]: '#EA5614',
      [Intent.SECONDARY]: '#2B2C84',
      [Intent.SUCCESS]: '#16b29f',
      [Intent.WARNING]: '#ff8b04',
      [Intent.DANGER]: '#ff3440',
      [Intent.INFO]: '#606f99',
    },
    font: {
      [Intent.PRIMARY]: '#3E3E59',
      [Intent.SECONDARY]: '#FFFFFF',
      [Intent.INFO]: '#8E8EA7',
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
    popover: popoverTheme(baseThemePart),
    tooltip: tooltipTheme(baseThemePart),
    text: textTheme(baseThemePart),
  },
};

const defaultTheme: IBaseTheme = {
  ...baseThemePart,
  ...componentsThemePart,
};

export default defaultTheme;
