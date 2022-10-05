import ComponentThemeFactory from '@specs/ui/themes/component-factory';

export type TooltipTheme = {
  defaultBackgroundColor: string,
  defaultColor: string,
}

type TooltipThemeFactory = ComponentThemeFactory<TooltipTheme>

export default TooltipThemeFactory;
