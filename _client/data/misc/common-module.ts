import { ContainerModule } from 'inversify';

import LocaleStore from '@stores/_misc/locale';
import UiStore from '@stores/_misc/ui';
import AppStore from '@stores/App';

const appModule = new ContainerModule(
  bind => {
    bind(AppStore).toSelf().inSingletonScope();
    bind(LocaleStore).toSelf().inSingletonScope();
    bind(UiStore).toSelf().inSingletonScope();
  },
);

export default appModule;
