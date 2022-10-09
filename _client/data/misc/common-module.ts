import { ContainerModule } from 'inversify';

import LocaleStore from '@stores/_misc/locale';
import UiStore from '@stores/_misc/ui';

const appModule = new ContainerModule(
  bind => {
    bind(LocaleStore).toSelf().inSingletonScope();
    bind(UiStore).toSelf().inSingletonScope();
  },
);

export default appModule;
