import {ContainerModule} from "inversify";
import AppStore from "@store/App";

const appModule = new ContainerModule(
  (
    bind
  ) => {
    bind(AppStore).toSelf().inSingletonScope();
  }
)

export default appModule;
