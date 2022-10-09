import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import BotMessage from '@components/home/chat/message/variants/bot';
import UserMessage from '@components/home/chat/message/variants/user';
import MessageType from '@specs/_misc/message-type';
import BotMessageStore from '@stores/chat/message/bot';
import UserMessageStore from '@stores/chat/message/user';

export interface MessageProps {
  message: BotMessageStore | UserMessageStore
}
const Message: FC<MessageProps> = props => {
  const { message } = props;

  switch (message.type) {
    case MessageType.BOT: return <BotMessage key={message.id} message={message as BotMessageStore} />;
    case MessageType.USER: return <UserMessage key={message.id} message={message as UserMessageStore} />;
    default: return null;
  }
};

export default observer(Message);
