import { SizeMap } from '@client/styles/specs';
import { ButtonTheme } from '@client/styles/themes/components/button';
import { InputTheme } from '@client/styles/themes/components/input';
import { PopoverTheme } from '@client/styles/themes/components/popover';
import { TextTheme } from '@client/styles/themes/components/text';
import { TooltipTheme } from '@client/styles/themes/components/tooltip';
import { Dictionary } from '@specs/_common/dictionary';
import Intent from '@specs/ui/intent';

export enum Theme {
  DEFAULT = 'DEFAULT',
  DARK = 'DARK',
}

export type ThemeBasePart = {
  name: Theme;
  color: {
    backgrounds: {
      [Intent.PRIMARY]: string;
      [Intent.SECONDARY]: string;
    },
    intents: Dictionary<Intent, string>;
    font: Dictionary<Intent.PRIMARY | Intent.SECONDARY | Intent.INFO, string>;
  },
  shadow: string;
  appSize: SizeMap<number>;
  fontSize: SizeMap;
  iconSize: SizeMap;
  spacing: SizeMap;
  animationDuration: string;
  disableOpacity: number;
  fontNames: Dictionary<string, string>
}

export type ThemeComponentsPart = {
  components: {
    button: ButtonTheme;
    popover: PopoverTheme;
    tooltip: TooltipTheme;
    text: TextTheme;
    input: InputTheme;
  }
}

interface IBaseTheme extends ThemeBasePart, ThemeComponentsPart {
  name: Theme
}

export default IBaseTheme;
