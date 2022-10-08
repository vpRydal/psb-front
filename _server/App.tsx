import HomeController from './controllers/Home';
import Server from './Server';

const server = new Server({
  middleWares: [],
});

server.attachControllers([
  new HomeController(server),
]);
server.attachAssets();

server.start(() => console.log(`Listening on port http://${server.host}:${server.port}/`));
