import { Request, Response } from 'express';
import React from "react";
import {ChunkExtractor} from "@loadable/server";

import {StaticRouter} from "react-router-dom";
import App from "../../client/App";
import {renderToString} from "react-dom/server";
import path from "path";
import * as fs from "fs";
import PATH from "../../webpack/path";


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
const statsFile = IS_DEV ? false : JSON.parse(fs.readFileSync(path.resolve(__dirname, `../../public/client/loadable-stats.json`)).toString());

function renderProd(req: Request, res: Response) {
  const clientExtractor = new ChunkExtractor({
    stats: statsFile,
    publicPath: 'client'
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
      {clientExtractor.getScriptElements()}
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
