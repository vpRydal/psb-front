import { math } from 'polished';

import InputThemeFactory from '@client/styles/themes/components/input';

const inputTheme: InputThemeFactory = theme => ({
  maxHeight: '70px',
  borderColor: theme.color.font.INFO,
  padding: `${theme.spacing.lg} ${math(`${theme.spacing.md} * 2`)}`,
  invalidColor: theme.color.intents.DANGER,
  validColor: theme.color.intents.SUCCESS,
  borderRadius: '5px',
});

export default inputTheme;
