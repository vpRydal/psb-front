import { ContainerModule } from 'inversify';

import LocaleStore from '@stores/_common/locale';
import AppStore from '@stores/App';

const appModule = new ContainerModule(
  (
    bind,
  ) => {
    bind(AppStore).toSelf().inSingletonScope();
    bind(LocaleStore).toSelf().inSingletonScope();
  },
);

export default appModule;
