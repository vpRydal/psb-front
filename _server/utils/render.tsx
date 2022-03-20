import { Request, Response } from 'express';
import React from "react";
import {StaticRouter} from "react-router-dom";
import {renderToString} from "react-dom/server";
import {ChunkExtractor, ChunkExtractorManager} from "@loadable/server";

import App from "@client/App";
import BaseController from "../controllers/Base";

export default function render(req: Request, res: Response, viewName: string, controller: BaseController) {
  const clientExtractor = new ChunkExtractor({
    stats: controller.server.clientFs.getLoadableStatsFile(),
    entrypoints: ['main', controller.chunkName]
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
