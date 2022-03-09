import express, {Request, Response} from "express";

import IBaseController from "./Base";
import render from "../utils/render";

export default class IndexController extends IBaseController {
  prefix: '';
  router = express.Router();

  constructor() {
    super();
    this.indexAction = this.indexAction.bind(this);

    this.initRoutes()
  }

  initRoutes(): void {
    const { router } = this;

    router.get('/', this.indexAction)
  }

  indexAction(req: Request, res: Response) {
    render(req, res)
  }

}
