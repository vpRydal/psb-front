import { Request, Response } from 'express';
import React from "react";
import {ChunkExtractor} from "@loadable/server";

import PATH from "../../webpack/path";
import {StaticRouter} from "react-router-dom";
import App from "../../src/App";
import {renderToString} from "react-dom/server";


const IS_DEV = process.env.NODE_ENV === 'development';

function renderDev(req: Request, res: Response) {
  const assetsByChunkName = Array.from(res.locals.webpack.devMiddleware.stats.compilation.assetsInfo.keys()) as string[]
  const scripts = assetsByChunkName.filter(asset => asset.includes('.js'))

  const jsx = (
    <StaticRouter location={req.path}>
      <App/>
    </StaticRouter>
  )

  res.status(200).send(renderToString((
    <>
      {scripts.map(asset => (<script defer src={asset}/>))}
      <div id="root">
        {jsx}
      </div>
    </>
  )));
}
function renderProd(req: Request, res: Response) {
  const clientExtractor = new ChunkExtractor({
    statsFile: `${PATH.statsFileClient}/loadable-stats.json`
  });

  const jsx = clientExtractor.collectChunks((
    <StaticRouter location={req.path}>
      <App/>
    </StaticRouter>
  ))

  return res.status(200).send(renderToString((
    <>
      {clientExtractor.getLinkElements()}
      {clientExtractor.getStyleElements()}
      {clientExtractor.getStyleElements()}
      <div id="root">
        {jsx}
      </div>
    </>
  )));
}
export default function render(req: Request, res: Response) {
  if (IS_DEV) {
    renderDev(req, res);
  } else {
    renderProd(req, res);
  }
}
