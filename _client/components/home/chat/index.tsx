import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import Message from '@components/home/chat/message';
import CustomerType from '@specs/_misc/сustomer-type';
import ChatStore from '@stores/chat';
import BotMessageStore from '@stores/chat/message/bot';
import CustomerTypeReplyVariantsStore from '@stores/chat/reply-variant/customer-type';

import * as Style from './style';

const Chat = () => {
  const chatStore = useInjection(ChatStore);

  useEffect(() => {
    chatStore.addMessage(new BotMessageStore(new CustomerTypeReplyVariantsStore([
      CustomerType.JURISTIC_PERSON, CustomerType.PRIVATE_PERSON,
    ])));
  }, []);

  return (
    <Style.Wrapper>
      <Style.AppContainer>
        <Style.Content>
          <Style.BotTrack>
            <Style.Bot />
          </Style.BotTrack>
          <Style.ChatTrack>
            {chatStore.messagesPool.map(message => (
              <Message message={message} key={message.id} />
            ))}
          </Style.ChatTrack>
        </Style.Content>
      </Style.AppContainer>
    </Style.Wrapper>
  );
};

export default observer(Chat);
