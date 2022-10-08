import { ExtractRouteParams } from 'react-router';
import { generatePath } from 'react-router-dom';

import { ROUTES } from '@client/router';

export default class RouterUtils {
  static getHome(params?: ExtractRouteParams<typeof ROUTES.home>) {
    return generatePath(ROUTES.home, params);
  }
}
