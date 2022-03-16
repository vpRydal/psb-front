import React from 'react'
import Server from "./Server";
import IndexController from "./controllers/Index";
import OtherController from "./controllers/Other";

const server = new Server({
  middleWares: [],
  controllers: [
    new OtherController(),
    new IndexController(),
  ]
});

server.start(() => console.log(`Listening on port http://${server.host}:${server.port}/`))
