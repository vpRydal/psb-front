import express, {Application, ErrorRequestHandler, RequestHandler} from "express";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpack from "webpack";

import IBaseController from "./controllers/Base";
import compression from "compression";
import webpackConfig from '../webpack/webpack.config.prod'

var expressStaticGzip = require("express-static-gzip");


const IS_DEV = process.env.NODE_ENV === 'development';

export default class Server {
  public expressApp: Application

  public port: number
  public host: string

  constructor(appInit: {
    middleWares: Array<RequestHandler | ErrorRequestHandler>;
    controllers: IBaseController[];
  }) {
    this.expressApp = express();
    this.port = Number(process.env.PORT) || 3001;
    this.host = process.env.HOST || '127.0.01';

    this.init();
    this.routes(appInit.controllers);
    this.assets();
    this.template();
  }

  private init(): void {
    const { expressApp } = this;

    expressApp.use(compression());

    expressApp.set('host', this.host);
    expressApp.set('port', this.port);

    if (IS_DEV) {
      const compiler = webpack(webpackConfig);

      expressApp.use(
        webpackDevMiddleware(compiler, { serverSideRender: true })
      );
    }
  }

  private middlewares(middleWares: Array<RequestHandler | ErrorRequestHandler>): void {
    const { expressApp } = this;

    middleWares.forEach(middleWare => {
      expressApp.use(middleWare);
    });
  }

  private routes(controllers: IBaseController[]): void {
    const { expressApp } = this;

    controllers.forEach(controller => {
      expressApp.use(controller.prefix, controller.router);
    });
  }

  private assets(): void {
    const { expressApp } = this;

    expressApp.use('/', express.static('public'));
    expressApp.use('/', expressStaticGzip('public'));
  }

  private template(): void {
    const { expressApp } = this;

    expressApp.set('view engine', 'twig');
    expressApp.set('views', `_server/views`);
  }

  public start(callback: (app: Application) => void): void {
    const { expressApp } = this;

    expressApp.listen(this.port, () => {
      callback(this.expressApp);
    });
  }

}

