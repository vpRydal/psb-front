import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { Request, Response } from 'express';
import React, { FC } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Stats } from 'webpack';

import AppProd from '@client/App';

import BaseController from '../controllers/Base';

function getAppComponent(stats: Stats): FC {
  const { assets } = stats.compilation;
  const assetIndex = Object.keys(assets).findIndex((assetName) => assetName.includes('.js'));
  const { outputPath } = stats.compilation.compiler;
  const outputFs = stats.compilation.compiler.outputFileSystem;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const source = outputFs.readFileSync(`${outputPath}/${Object.keys(assets)[assetIndex]}`).toString();
  let App: any;

  // eslint-disable-next-line no-eval
  eval(source);

  return App!.default;
}

export default function render(req: Request, res: Response, viewName: string, controller: BaseController) {
  let App: FC = AppProd;

  if (controller.server.serverCompiler) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const clientAppComponentStats: Stats = res.locals.webpack.devMiddleware.stats.stats[1];
    App = getAppComponent(clientAppComponentStats);
  }

  const clientExtractor = new ChunkExtractor({
    stats: controller.server.clientFs.getLoadableStatsFile(),
    entrypoints: ['main', controller.chunkName],
  });

  res.status(200).render(viewName, {
    body: renderToString((
      <>
        {clientExtractor.getLinkElements()}
        {clientExtractor.getStyleElements()}
        {clientExtractor.getScriptElements()}
        <div id="root">
          <ChunkExtractorManager extractor={clientExtractor}>
            <StaticRouter location={req.path}>
              <App />
            </StaticRouter>
          </ChunkExtractorManager>
        </div>
      </>
    )),
  });
}
