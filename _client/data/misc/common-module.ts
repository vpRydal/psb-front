import { ContainerModule } from 'inversify';

import AppStore from '@stores/App';

const appModule = new ContainerModule(
  (
    bind,
  ) => {
    bind(AppStore).toSelf().inSingletonScope();
  },
);

export default appModule;
