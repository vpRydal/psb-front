import {generatePath} from "react-router-dom";
import {ROUTES} from "@client/router";
import {ExtractRouteParams} from "react-router";

export default class RouterUtils {

  static getHome(params?: ExtractRouteParams<typeof ROUTES.home>) {
    return generatePath(ROUTES.home, params)
  }

  static getBooking(params: ExtractRouteParams<typeof ROUTES.booking>) {
    return generatePath(ROUTES.booking, params)
  }
}
