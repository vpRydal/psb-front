import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';

export enum Theme {
  DEFAULT = 'DEFAULT',
  DARK = 'DARK',
}

interface IBaseTheme {
  name: Theme,
  color: {
    intents: { [key in Intent]: string }
  },
  appSize: { [key in Size]: number }
}

export default IBaseTheme;
