import Intent from '@specs/ui/intent';

export enum Theme {
  DEFAULT = 'DEFAULT',
  DARK = 'DARK',
}

interface IBaseTheme {
  name: Theme,
  color: {
    intents: { [key in Intent]: string }
  }
}

export default IBaseTheme;
