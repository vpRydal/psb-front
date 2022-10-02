import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { Request, Response } from 'express';
import React, { FC } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { Stats } from 'webpack';

import AppProd, { Props } from '@client/App';
import { set } from '@config';
import i18next, { translatorPromise } from '@translations';

import BaseController from '../controllers/Base';

function getAppComponent(stats: Stats): FC {
  const { assets } = stats.compilation;
  const assetIndex = Object.keys(assets).findIndex(assetName => assetName.includes('.js'));
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
  let App: FC<Props> = AppProd;

  if (controller.server.serverCompiler) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const clientAppComponentStats: Stats = res.locals.webpack.devMiddleware.stats.stats[1];
    App = getAppComponent(clientAppComponentStats);
  }

  set({ isServer: true });

  const clientExtractor = new ChunkExtractor({
    stats: controller.server.clientFs.getLoadableStatsFile(),
    entrypoints: ['main', controller.chunkName],
  });

  translatorPromise.then(() => {
    const sheet = new ServerStyleSheet();
    const html = renderToString(sheet.collectStyles((
      <>
        {clientExtractor.getLinkElements()}
        {clientExtractor.getStyleElements()}
        {clientExtractor.getScriptElements()}
        <div id="root">
          <ChunkExtractorManager extractor={clientExtractor}>
            <StaticRouter location={req.path}>
              <App i18n={i18next} />
            </StaticRouter>
          </ChunkExtractorManager>
        </div>
      </>
    )));

    res.status(200).render(viewName, {
      body: html,
      styleTags: sheet.getStyleTags(),
    });
  });
}
