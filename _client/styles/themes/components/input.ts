import ComponentThemeFactory from '@specs/ui/themes/component-factory';

export type InputTheme = {
  padding: string;
  maxHeight: string;
  borderColor: string;
  invalidColor: string;
  validColor: string;
  borderRadius: string
}

type InputThemeFactory = ComponentThemeFactory<InputTheme>

export default InputThemeFactory;
