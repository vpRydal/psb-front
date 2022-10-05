import ComponentThemeFactory from '@specs/ui/themes/component-factory';

export type PopoverTheme = {
  backgroundColor: string,
  arrowColor: string,
  arrowSize: string,
  padding: string,
  borderRadius: string,
  boxShadow: string,
}

type PopoverThemeFactory = ComponentThemeFactory<PopoverTheme>

export default PopoverThemeFactory;
