import express, { Request, Response } from 'express';

import Server from '../Server';
import render from '../utils/render';
import BaseController from './Base';

export default class HomeController extends BaseController {
  prefix = '';

  router = express.Router();

  chunkName = 'pages-home';

  constructor(server: Server) {
    super(server);
    this.indexAction = this.indexAction.bind(this);

    this.initRoutes();
  }

  initRoutes(): void {
    const { router } = this;

    router.get('/', this.indexAction);
  }

  indexAction(req: Request, res: Response) {
    render(req, res, 'pages/index', this);
  }
}
