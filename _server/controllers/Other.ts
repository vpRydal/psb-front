import express, {Request, Response} from "express";

import IBaseController from "./Base";
import render from "../utils/render";

export default class OtherController extends IBaseController {
  prefix = '';
  router = express.Router();
  chunkName = 'pages-other-page';

  constructor() {
    super();
    this.indexAction = this.indexAction.bind(this);

    this.initRoutes()
  }

  initRoutes(): void {
    const { router } = this;

    router.get('/other-page', this.indexAction)
  }

  indexAction(req: Request, res: Response) {
    render(req, res, 'pages/index', this.chunkName)
  }

}
