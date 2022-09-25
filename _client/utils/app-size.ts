import { findKey } from 'lodash';

import Size from '@specs/_common/size';
import IBaseTheme from '@specs/ui/themes/base';

export default class AppSizeUtil {
  static getSize(windowWidth: number, sizeMap: IBaseTheme['appSize']): Size {
    return findKey(sizeMap, (maxWidth, size) => windowWidth < sizeMap[size as Size]) as Size;
  }
}
