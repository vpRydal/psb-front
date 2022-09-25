import express, { Request, Response } from 'express';

import Server from '../Server';
import render from '../utils/render';
import BaseController from './Base';

export default class BookingController extends BaseController {
  prefix = '';

  router = express.Router();

  chunkName = 'pages-booking';

  constructor(server: Server) {
    super(server);
    this.indexAction = this.indexAction.bind(this);

    this.initRoutes();
  }

  initRoutes(): void {
    const { router } = this;

    router.get('/booking/*', this.indexAction);
  }

  indexAction(req: Request, res: Response) {
    render(req, res, 'pages/index', this);
  }
}
