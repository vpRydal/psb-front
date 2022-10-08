import compression from 'compression';
import express, { Application, ErrorRequestHandler, RequestHandler } from 'express';
import webpack, { MultiCompiler } from 'webpack';
import WDM from 'webpack-dev-middleware';

import { getPath } from '../webpack/path';
import { getClientSsrDevConfig } from '../webpack/webpack.client-ssr.config.dev';
import { getClientAppComponentDevConfig } from '../webpack/webpack.server-client-app-component.config.dev';
import BaseClientFs from './client-fs/Base';
import ClientFsDev from './client-fs/ClientFsDev';
import ClientFsProd from './client-fs/ClientFsProd';
import BaseController from './controllers/Base';

const IS_DEV = process.env.NODE_ENV === 'development';

export default class Server {
  readonly expressApp: Application

  readonly port: number

  readonly host: string

  readonly serverCompiler?: MultiCompiler

  readonly clientFs: BaseClientFs

  constructor({ controllers }: {
    middleWares: Array<RequestHandler | ErrorRequestHandler>;
    controllers?: BaseController[];
  }) {
    this.expressApp = express();
    this.port = Number(process.env.PORT) || 3001;
    this.host = process.env.HOST || '127.0.0.1';

    if (IS_DEV) {
      const paths = getPath('./');
      const config = getClientSsrDevConfig(paths);
      const compiler = webpack([config, getClientAppComponentDevConfig(paths)]);

      this.clientFs = new ClientFsDev(compiler, config);
      this.serverCompiler = compiler;

      this.expressApp.use(
        WDM(compiler, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          outputFileSystem: this.clientFs.fs,
          serverSideRender: true,
        }),
      );
    } else {
      this.clientFs = new ClientFsProd();
    }

    this.init();
    if (controllers) {
      this.attachControllers(controllers);
      this.attachAssets();
    }
    this.template();
  }

  private init(): void {
    const { expressApp } = this;

    expressApp.use(compression());

    expressApp.set('host', this.host);
    expressApp.set('port', this.port);
  }

  private middlewares(middleWares: Array<RequestHandler | ErrorRequestHandler>): void {
    const { expressApp } = this;

    middleWares.forEach(middleWare => {
      expressApp.use(middleWare);
    });
  }

  attachControllers(controllers: BaseController[]): void {
    const { expressApp } = this;

    controllers.forEach(controller => {
      expressApp.use(controller.prefix, controller.router);
    });
  }

  attachAssets(): void {
    const { expressApp } = this;

    expressApp.use('/', express.static('public'));
  }

  private template(): void {
    const { expressApp } = this;

    expressApp.set('view engine', 'twig');
    expressApp.set('views', '_server/views');
  }

  public start(callback: (app: Application) => void): void {
    const { expressApp } = this;

    expressApp.listen(this.port, () => {
      callback(this.expressApp);
    });
  }
}
