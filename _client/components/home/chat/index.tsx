import { useInjection } from 'inversify-react';
import { debounce } from 'lodash';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { useSpring, useSpringRef } from 'react-spring';

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
  const chatTrackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const conteinerRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const [botStyles, botStylesApi] = useSpring(() => ({
    from: {
      top: 0,
    },
    config: {
      duration: 200,
    },
  }));

  useEffect(() => {
    wrapperRef.current?.scroll({
      behavior: 'smooth',
      top: (conteinerRef.current?.clientHeight || 0) * 2,
    });
  }, [chatStore.messagesPool.length]);

  useEffect(() => {
    chatStore.addMessage(new BotMessageStore(new CustomerTypeReplyVariantsStore([
      CustomerType.JURISTIC_PERSON, CustomerType.PRIVATE_PERSON,
    ])));
  }, []);

  return (
    <Style.Wrapper ref={wrapperRef}>
      <Style.AppContainer ref={conteinerRef}>
        <Style.Content>
          <Style.BotTrack>
            <Style.Bot />
          </Style.BotTrack>
          <Style.ChatTrack ref={chatTrackRef}>
            {chatStore.messagesPool.map((message, index) => (
              <div ref={index === chatStore.messagesPool.length - 1 ? messageRef : undefined}>
                <Message message={message} key={message.id} />
              </div>
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
