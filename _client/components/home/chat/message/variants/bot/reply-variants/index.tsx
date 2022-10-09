import { observer } from 'mobx-react-lite';
import React, { FC, ReactNode } from 'react';

import Variants from '@components/home/chat/message/variants/bot/reply-variants/variants';
import ReplyType from '@specs/_misc/reply-type';
import BotMessageStore from '@stores/chat/message/bot';

import * as CommonStyle from '../../common-style';

export interface BotMessageProps {
  message: BotMessageStore
}
const ReplyVariants: FC<BotMessageProps> = props => {
  const { message } = props;

  function renderWrapper(children: ReactNode[]) {
    return (
      <CommonStyle.ReplyVariantsWrapper>
        {children}
      </CommonStyle.ReplyVariantsWrapper>
    );
  }

  function renderContent() {
    switch (message.reply.type) {
      case ReplyType.CUSTOMER_TYPE: return renderWrapper(message.reply.variants.map(value => (
        <Variants key={message.id} value={value} message={message} />
      )));
      case ReplyType.LOAN: return renderWrapper(message.reply.variants.map(value => (
        <Variants key={message.id} value={value} message={message} />
      )));
      case ReplyType.CATEGORY: return renderWrapper(message.reply.variants.map(value => (
        <Variants key={message.id} value={value} message={message} />
      )));
      default: return null;
    }
  }
  return (
    <CommonStyle.Wrapper>
      {renderContent()}
    </CommonStyle.Wrapper>
  );
};

export default observer(ReplyVariants);
