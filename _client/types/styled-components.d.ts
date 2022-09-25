import IBaseTheme from '@specs/ui/themes/base';

declare module 'styled-components' {
  export interface DefaultTheme extends IBaseTheme {}
}
