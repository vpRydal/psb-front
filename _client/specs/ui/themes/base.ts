import { SizeMap } from '@client/styles/specs';
import { ButtonTheme } from '@client/styles/themes/components/button';
import { Dictionary } from '@specs/_common/dictionary';
import Intent from '@specs/ui/intent';

export enum Theme {
  DEFAULT = 'DEFAULT',
  DARK = 'DARK',
}

export type ThemeBasePart = {
  name: Theme,
  color: {
    intents: Dictionary<Intent, string>,
    font: Dictionary<Intent.PRIMARY | Intent.SECONDARY, string>
  },
  appSize: SizeMap<number>,
  fontSize: SizeMap,
  iconSize: SizeMap,
  spacing: SizeMap,
  animationDuration: string
  disableOpacity: number
}

export type ThemeComponentsPart = {
  components: {
    button: ButtonTheme
  }
}

interface IBaseTheme extends ThemeBasePart, ThemeComponentsPart {
  name: Theme
}

export default IBaseTheme;
