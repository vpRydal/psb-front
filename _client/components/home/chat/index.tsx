import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import Message from '@components/home/chat/message';
import * as CommonStyle from '@components/home/chat/message/variants/common-style';
import CustomerType from '@specs/_misc/сustomer-type';
import ChatStore from '@stores/chat';
import BotMessageStore from '@stores/chat/message/bot';
import CustomerTypeReplyVariantsStore from '@stores/chat/reply-variant/customer-type';
import DotLoader from '@ui/dot-loader';
import { ServerActionInformer } from '@ui/server-action-informer';

import * as Style from './style';

const Chat = () => {
  const chatStore = useInjection(ChatStore);
  const getCategoriesAction = chatStore.getServerAction('getCategories');
  const getCreditsAction = chatStore.getServerAction('getCredits');

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
            <ServerActionInformer
              serverAction={[getCategoriesAction, getCreditsAction]}
              components={{
                spinnerWrapper: () => (
                  <CommonStyle.BigMessage>
                    <DotLoader />
                  </CommonStyle.BigMessage>
                ),
              }}
            />
          </Style.ChatTrack>
        </Style.Content>
      </Style.AppContainer>
    </Style.Wrapper>
  );
};

export default observer(Chat);
