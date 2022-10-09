import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import ReplyType from '@specs/_misc/reply-type';
import { Placement } from '@specs/ui/placement';
import BotMessageStore from '@stores/chat/message/bot';

import * as CommonStyle from '../../common-style';

export interface BotMessageProps {
  reply: BotMessageStore['reply']
}
const MessageText: FC<BotMessageProps> = props => {
  const { reply } = props;

  function renderContent() {
    switch (reply.type) {
      case ReplyType.CUSTOMER_TYPE: return (
        <>
          Хотите узнать больше о наших кредитных продуктах?
          <br />
          <br />
          Если тебе больше
          {' '}
          <b>21</b>
          {' '}
          года, давай определимся:
        </>
      );
      case ReplyType.LOAN: return (
        <>
          Какой тип кредитования вас интересует?
        </>
      );
      case ReplyType.CATEGORY: return (
        <>
          К какой категории вы себя относите?
        </>
      );
      default: return null;
    }
  }

  return (
    <CommonStyle.BigMessage activeAnge={Placement.LEFT_END}>
      {renderContent()}
    </CommonStyle.BigMessage>
  );
};

export default observer(MessageText);
