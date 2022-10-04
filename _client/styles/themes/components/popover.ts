import { ThemeBasePart } from '@specs/ui/themes/base';

export type PopoverColorTheme = {
  backgroundColor: string,
  arrowColor: string,
  arrowSize: string,
  padding: string,
  borderRadius: string,
  boxShadow: string,
}

const popoverTheme = (theme: ThemeBasePart): PopoverColorTheme => ({
  backgroundColor: '#ffffff',
  arrowColor: '#ffffff',
  arrowSize: '8px',
  borderRadius: '5px',
  padding: theme.spacing.sm,
  boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.12)',
});

export default popoverTheme;
