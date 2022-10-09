import { ContainerModule } from 'inversify';

import ChatReplyService from '@services/chat/reply';
import ChatStore from '@stores/chat';

const chatModule = new ContainerModule(bind => {
  bind(ChatStore).toSelf().inSingletonScope();
  bind(ChatReplyService).toSelf().inSingletonScope();
});

export default chatModule;
