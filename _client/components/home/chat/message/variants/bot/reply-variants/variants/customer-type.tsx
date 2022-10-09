import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import ChatReplyService from '@services/chat/reply';
import Size from '@specs/_common/size';
import CustomerType from '@specs/_misc/сustomer-type';
import Intent from '@specs/ui/intent';
import { Placement } from '@specs/ui/placement';
import BotMessageStore from '@stores/chat/message/bot';

import * as CommonStyle from '../../../common-style';

export interface BotMessageProps {
  type: CustomerType;
  displayOnUser: boolean;
  disableActions?: boolean;
  message: BotMessageStore;
}
const CustomerReplyVariant: FC<BotMessageProps> = props => {
  const {
    type, displayOnUser, message, disableActions,
  } = props;
  const chatReplyService = useInjection(ChatReplyService);

  function handleClick() {
    if (!disableActions) {
      chatReplyService.selectCustomerType(type, message);

      if (!message.reply.selectedVariant) {
        message.reply.selectedVariant = type;
      }
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
      {type === CustomerType.PRIVATE_PERSON && 'Физическим лицом'}
      {type === CustomerType.JURISTIC_PERSON && 'Владельцем малого бизнеса'}
    </CommonStyle.ReplyVariantMessage>
  );
};

export default observer(CustomerReplyVariant);
