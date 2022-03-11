import React from 'react'
import Server from "./Server";
import IndexController from "./controllers/Index";

const server = new Server({
  middleWares: [],
  controllers: [
    new IndexController(),
  ]
});

server.start(() => console.log(`Listening on port http://${server.host}:${server.port}/`))
