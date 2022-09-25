import IndexController from './controllers/Index';
import OtherController from './controllers/Other';
import Server from './Server';

const server = new Server({
  middleWares: [],
});

server.attachControllers([
  new OtherController(server),
  new IndexController(server),
]);
server.attachAssets();

server.start(() => console.log(`Listening on port http://${server.host}:${server.port}/`));
