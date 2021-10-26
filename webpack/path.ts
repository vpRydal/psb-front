// @ts-ignore
import path from "path";


const root = path.resolve(__dirname, '../')
const src = path.resolve(root, 'src')
const build = path.resolve(root, 'build')
const buildServer = path.resolve(root, 'build/server')
const buildClient = path.resolve(root, 'build/client')
const entryClient = path.resolve(root, 'src/index.tsx')
const entryServer = path.resolve(root, 'server/index.tsx')

const PATH = {
    root,
    src,
    build,
    buildServer,
    buildClient,
    entryClient,
    entryServer,
}

export default PATH