import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import ChatReplyService from '@services/chat/reply';
import Size from '@specs/_common/size';
import LoanType from '@specs/_misc/loan-type';
import Intent from '@specs/ui/intent';
import { Placement } from '@specs/ui/placement';
import BotMessageStore from '@stores/chat/message/bot';

import * as CommonStyle from '../../../common-style';

export interface BotMessageProps {
  type: LoanType;
  displayOnUser: boolean;
  message: BotMessageStore;
}
const LoanReplyVariant: FC<BotMessageProps> = props => {
  const { message, type, displayOnUser } = props;
  const chatReplyService = useInjection(ChatReplyService);

  function handleClick() {
    chatReplyService.selectLoan(type, message);

    if (!message.reply.selectedVariant) {
      message.reply.selectedVariant = type;
    }
  }

  return (
    <CommonStyle.ReplyVariantMessage
      onClick={displayOnUser ? undefined : handleClick}
      intent={displayOnUser ? undefined : Intent.PRIMARY}
      size={displayOnUser ? Size.MD : Size.SM}
      activeAnge={displayOnUser ? Placement.RIGHT_END : Placement.LEFT_END}
      isSelected={message.reply.selectedVariant === type && !displayOnUser}
    >
      {type === LoanType.CREDIT && 'Кредит'}
      {type === LoanType.MORTGAGE && 'Ипотека'}
      {type === LoanType.REFINANCING && 'Рефинансирование'}
      {type === LoanType.CREDIT_CARD && 'Кредитные карты'}
    </CommonStyle.ReplyVariantMessage>
  );
};

export default observer(LoanReplyVariant);
