import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import Variants from '@components/home/chat/message/variants/bot/reply-variants/variants';
import BotMessageStore from '@stores/chat/message/bot';
import UserMessageStore from '@stores/chat/message/user';

import * as Style from './style';

export interface UserMessageProps {
  message: UserMessageStore
}
const SelectedVariant: FC<UserMessageProps> = props => {
  const { message } = props;

  if (!message.replTo || !message.replTo.reply.selectedVariant) {
    return null;
  }

  return (
    <Style.Wrapper>
      <Variants
        message={message.replTo}
        value={message.replTo.reply.selectedVariant as BotMessageStore['reply']['variants'][0]}
        displayOnUser
      />
    </Style.Wrapper>
  );
};

export default observer(SelectedVariant);
