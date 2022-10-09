import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import ReplyType from '@specs/_misc/reply-type';
import { Placement } from '@specs/ui/placement';
import TextName from '@specs/ui/text-name';
import BotMessageStore from '@stores/chat/message/bot';
import CategoryReplyVariantsStore from '@stores/chat/reply-variant/category';
import CreditViewReplyVariantsStore from '@stores/chat/reply-variant/credit-view';
import Text from '@ui/_misc/text';

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
      case ReplyType.CATEGORY: {
        if (!(reply as CategoryReplyVariantsStore).data.categories.length) {
          return (
            <>
              Ой! Кажется я ничего не нашла, давайте попробуем что-нибудь другое
            </>
          );
        }

        return 'К какой категории вы себя относите?';
      }
      case ReplyType.FORM_DATA: return (
        <>
          Узнаем данные
          <br />
          Укажите, пожалуйста сумму кредитования и период за который вы бы хотели ее выплатить?
        </>
      );
      case ReplyType.CREDIT: return (
        <>
          Предлагаю вам следующие вариант
        </>
      );
      case ReplyType.CREDIT_VIEW: return (
        <>
          <Text textName={TextName.TITLE_H4}>{(reply as CreditViewReplyVariantsStore).credit.title}</Text>
          <Text>
            <span dangerouslySetInnerHTML={{ __html: (reply as CreditViewReplyVariantsStore).credit.details.replaceAll('\n', '<br/>') }} />
          </Text>
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
