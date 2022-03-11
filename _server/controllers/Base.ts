import {Router} from "express";

export default abstract class IBaseController {
  abstract initRoutes(): void;
  abstract prefix: string;
  abstract router: Router;
}
