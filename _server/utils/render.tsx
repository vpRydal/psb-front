import { Request, Response } from 'express';
import React from "react";
import {ChunkExtractor, ChunkExtractorManager} from "@loadable/server";

import {StaticRouter} from "react-router-dom";
import App from "@client/App";
import {renderToString} from "react-dom/server";
import * as fs from "fs";

const IS_DEV = process.env.NODE_ENV === 'development';

function renderDev(req: Request, res: Response, viewName: string, chunkName: string) {
  const assetsByChunkName = Array.from(res.locals.webpack.devMiddleware.stats.compilation.assetsInfo.keys()) as string[]
  const scripts = assetsByChunkName.filter(asset => asset.includes('.js'))

  const jsx = (
    <StaticRouter location={req.path}>
      <App/>
    </StaticRouter>
  )

  res.status(200).render(viewName, {
    body: renderToString((
      <>
        {scripts.map(asset => (<script defer src={asset}/>))}
        <div id="root">
          {jsx}
        </div>
      </>
    ))
  });
}

const statsFile = IS_DEV ? false : JSON.parse(fs.readFileSync(`public/client/loadable-stats.json`).toString());

function renderProd(req: Request, res: Response, viewName: string, chunkName: string) {
  const clientExtractor = new ChunkExtractor({
    stats: statsFile,
    entrypoints: ['main', chunkName]
  });

  return res.status(200).render(viewName, {
    body: renderToString((
      <>
        {clientExtractor.getLinkElements()}
        {clientExtractor.getStyleElements()}
        {clientExtractor.getScriptElements()}
        <div id="root">
          <ChunkExtractorManager extractor={clientExtractor}>
            <StaticRouter location={req.path}>
              <App/>
            </StaticRouter>
          </ChunkExtractorManager>
        </div>
      </>
    ))
  });
}
export default function render(req: Request, res: Response, viewName: string, chunkName: string) {
  if (IS_DEV) {
    renderDev(req, res, viewName, chunkName);
  } else {
    renderProd(req, res, viewName, chunkName);
  }
}
