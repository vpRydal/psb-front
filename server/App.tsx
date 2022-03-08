import express from 'express';
import compression from 'compression';
// @ts-ignore
import redirect from 'express-redirect';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import React from 'react'
import webpack from 'webpack';

import webpackConfig from '../webpack/webpack.config.prod'
import {ChunkExtractor} from "@loadable/server";
import {renderToString} from "react-dom/server";
import App from "../src/App";
import {StaticRouter} from "react-router-dom";
import PATH from "../webpack/path";

import fs from "fs";
import {isArray, isObject, map} from "lodash";



const port = 3001
const server = express()
server.set('host', process.env.HOST || '0.0.0.0');
server.set('view engine', 'twig');
server.set('views', `${__dirname}/views`);

const compiler = webpack(webpackConfig);
server.use(
  webpackDevMiddleware(compiler, { serverSideRender: true })
);


// @ts-ignore
server.use(webpackHotMiddleware(compiler));
server.use(compression());
redirect(server);

function normalizeAssets(assets: string[]) {
  if (isObject(assets)) {
    return Object.values(assets);
  }

  return isArray(assets) ? assets : [assets];
}

server.get('*', async (req, res) => {
  const assetsByChunkName = Array.from(res.locals.webpack.devMiddleware.stats.compilation.assetsInfo.keys()) as string[]

  const obj = fs.readFileSync(`${PATH.statsFileClient}/loadable-stats.json`, {encoding:'utf8', flag:'r'}).toString();

    const clientExtractor = new ChunkExtractor({
      stats: JSON.parse(obj)
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
            {/*{clientExtractor.getStyleElements()}*/}
            <div id="root">
                {jsx}
            </div>
          {normalizeAssets(assetsByChunkName).map(asset => (<script src={asset}/>))}
        </>
    )));
})

server.listen(port, () => console.log(`Listening on port ${port}`))
