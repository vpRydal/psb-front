import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import minifyHTML from 'express-minify-html';
import App from '../src/App'
import Html from './html'

const port = 3001
const server = express()
const jsFiles: Array<string> = []

server.use('/assets', express.static('./build/client/assets'))
server.use('/css', express.static('./build/client/css'))
server.use('/js', express.static('./build/client/js'))
server.use(minifyHTML({
    override: false,
    htmlMinifier: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        minifyCSS: true
    }
}));


server.get('*', async (req, res) => {
    ReactDOMServer.renderToNodeStream(<Html scripts={jsFiles}>
        <StaticRouter location={req.url} context={{}}>
            <App />
        </StaticRouter>
    </Html>).pipe(res)
})

server.listen(port, () => console.log(`Listening on port ${port}`))