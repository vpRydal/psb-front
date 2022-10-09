import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import Variants from '@components/home/chat/message/variants/bot/reply-variants/variants';
import FormVariant from '@components/home/chat/message/variants/user/selected-variant/form';
import ReplyType from '@specs/_misc/reply-type';
import BotMessageStore from '@stores/chat/message/bot';
import UserMessageStore from '@stores/chat/message/user';

import * as Style from './style';

export interface UserMessageProps {
  message: UserMessageStore
}
const SelectedVariant: FC<UserMessageProps> = props => {
  const { message } = props;

  if (message.replTo.reply.type !== ReplyType.FORM_DATA && (!message.replTo || !message.replTo.reply.selectedVariant)) {
    return null;
  }

  function renderVariant() {
    if (message.replTo.reply.type === ReplyType.FORM_DATA) {
      return (
        <FormVariant message={message} />
      );
    }

    return (
      <Variants
        message={message.replTo}
        value={message.replTo.reply.selectedVariant as BotMessageStore['reply']['variants'][0]}
        displayOnUser
      />
    );
  }

  return (
    <Style.Wrapper>
      {renderVariant()}
    </Style.Wrapper>
  );
};

export default observer(SelectedVariant);
