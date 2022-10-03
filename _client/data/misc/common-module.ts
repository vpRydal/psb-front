import { ContainerModule } from 'inversify';

import { FieldStore } from '@stores/_misc/field';
import { FormStore } from '@stores/_misc/form';
import LocaleStore from '@stores/_misc/locale';
import UiStore from '@stores/_misc/ui';
import AppStore from '@stores/App';

const appModule = new ContainerModule(
  bind => {
    bind(AppStore).toSelf().inSingletonScope();
    bind(LocaleStore).toSelf().inSingletonScope();
    bind(UiStore).toSelf().inSingletonScope();
    bind(FieldStore).toSelf();
    bind(FormStore).toSelf();
  },
);

export default appModule;
