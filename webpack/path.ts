// @ts-ignore
import path from "path";


export const root = path.resolve(__dirname, '../')
export const src = path.resolve(root, 'src')
export const build = path.resolve(root, 'build')
export const buildServer = path.resolve(root, 'build/server')
export const buildClient = path.resolve(root, 'build/client')
export const entryClient = path.resolve(root, 'src/index.tsx')
export const entryServer = path.resolve(root, 'server/index.ts')
export const statsFileClient = path.resolve(root, 'client')

const PATH = {
    root,
    src,
    build,
    buildServer,
    buildClient,
    entryClient,
    entryServer,
    statsFileClient
}

export default PATH
