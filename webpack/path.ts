// @ts-ignore
import path from "path";


export const root = path.resolve(__dirname, '../')
export const client = path.resolve(root, '_client')
export const build = path.resolve(root, 'build')
export const buildServer = path.resolve(root, 'build/server')
export const buildClient = path.resolve(root, 'public/client')
export const entryClient = path.resolve(client, 'index.tsx')
export const entryServer = path.resolve(root, '_server/index.ts')
export const statsFileClient = buildClient

const PATH = {
    root,
    client,
    build,
    buildServer,
    buildClient,
    entryClient,
    entryServer,
    statsFileClient
}

export default PATH
