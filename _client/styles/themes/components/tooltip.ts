import { ThemeBasePart } from '@specs/ui/themes/base';

export type TooltipTheme = {
  defaultBackgroundColor: string,
  defaultColor: string,
}

const tooltipTheme = (theme: ThemeBasePart): TooltipTheme => ({
  defaultBackgroundColor: '#ffffff',
  defaultColor: '#000000',
});

export default tooltipTheme;
