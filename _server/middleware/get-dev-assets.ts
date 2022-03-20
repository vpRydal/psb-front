import {RequestHandler} from "express";
import Server from "../Server";
import {IFs} from "memfs";


export function getDevAssetsMiddleware(server: Server): RequestHandler {
  return (req, res, next) => {
    if (req.method === 'GET' && (req.path.includes('.js') || req.path.includes('.png'))) {
      if (req.path.includes('.js')) {
        res.send((server.clientFs.fs as IFs).readFileSync(`/public${req.path}`))
      } else if (req.path.includes('assets')) {
        res.send((server.clientFs.fs as IFs).readFileSync(`/public/client${req.path}`))
      }
    } else {
      return next()
    }
  }
}
