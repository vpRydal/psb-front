import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import MessageText from '@components/home/chat/message/variants/bot/message-text';
import ReplyVariants from '@components/home/chat/message/variants/bot/reply-variants';
import BotMessageStore from '@stores/chat/message/bot';

import * as CommonStyle from '../common-style';

export interface BotMessageProps {
  message: BotMessageStore
}
const BotMessage: FC<BotMessageProps> = props => {
  const { message } = props;

  return (
    <CommonStyle.Wrapper>
      <MessageText reply={message.reply} />
      <ReplyVariants message={message} />
    </CommonStyle.Wrapper>
  );
};

export default observer(BotMessage);
