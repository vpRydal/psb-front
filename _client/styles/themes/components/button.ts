import { SizeMap } from '@client/styles/specs';
import { Dictionary } from '@specs/_common/dictionary';
import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';
import ComponentThemeFactory from '@specs/ui/themes/component-factory';

export type ButtonTheme = {
  minHeight: SizeMap;
  minWidth: SizeMap;
  padding: SizeMap;
  fontSize: SizeMap;
  defaultSize: Size;
  background?: Dictionary<Intent, Dictionary<'default' | 'hover' | 'focus', string>>;
  borderRadius: string;
}

type ButtonThemeFactory = ComponentThemeFactory<ButtonTheme>

export default ButtonThemeFactory;
