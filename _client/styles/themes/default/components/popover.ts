import PopoverThemeFactory from '@client/styles/themes/components/popover';

const popoverTheme: PopoverThemeFactory = theme => ({
  backgroundColor: '#ffffff',
  arrowColor: '#ffffff',
  arrowSize: '8px',
  borderRadius: '5px',
  padding: theme.spacing.sm,
  boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.12)',
});

export default popoverTheme;
