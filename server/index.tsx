import fs from 'fs'
// @ts-ignore
import express from 'express'
// @ts-ignore
import React from 'react'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router'
// @ts-ignore
import minifyHTML from 'express-minify-html';
import Html from './html'
// @ts-ignore
import { ChunkExtractor } from '@loadable/server';
// @ts-ignore
import path from "path";
import App from '../src/App'

const port = 3001
const server = express()
const jsFiles: Array<string> = []

server.use('/assets', express.static('./build/client/assets'))
server.use('/css', express.static('./build/client/css'))
server.use('/js', express.static('./build/client/js'))

server.get('*', async (req, res) => {

    const clientExtractor = new ChunkExtractor({
        statsFile: path.resolve(__dirname, '../client', 'loadable-stats.json'),
    });

    const jsx = clientExtractor.collectChunks((
        <StaticRouter location={req.path}>
            <App/>
        </StaticRouter>
    ))

    return res.status(200).send(renderToString((
        <>
            {clientExtractor.getScriptElements()}
            {clientExtractor.getLinkElements()}
            {clientExtractor.getStyleElements()}
            <div id="root">
                {jsx}
            </div>
        </>
    )));
})

server.listen(port, () => console.log(`Listening on port ${port}`))