import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import ChatReplyService from '@services/chat/reply';
import Size from '@specs/_common/size';
import { CategoryData } from '@specs/models/reply-varians-data/category';
import { CreditProduct } from '@specs/models/reply-varians-data/credit';
import Intent from '@specs/ui/intent';
import { Placement } from '@specs/ui/placement';
import BotMessageStore from '@stores/chat/message/bot';
import CreditReplyVariantsStore from '@stores/chat/reply-variant/credit';

import * as CommonStyle from '../../../common-style';

export interface BotMessageProps {
  credit: CreditProduct;
  displayOnUser: boolean;
  disableActions?: boolean;
  message: BotMessageStore;
}
const CreditReplyVariant: FC<BotMessageProps> = props => {
  const {
    credit, displayOnUser, message, disableActions,
  } = props;
  const chatReplyService = useInjection(ChatReplyService);
  const reply = message.reply as CreditReplyVariantsStore;

  function handleClick() {
    if (!disableActions) {
      chatReplyService.selectCredit(credit, message);

      if (!reply.selectedVariant) {
        reply.selectedVariant = credit;
      }
    }
  }

  return (
    <CommonStyle.ReplyVariantMessage
      onClick={displayOnUser ? undefined : handleClick}
      intent={displayOnUser ? undefined : Intent.PRIMARY}
      size={displayOnUser ? Size.MD : Size.SM}
      activeAnge={displayOnUser ? Placement.RIGHT_END : Placement.LEFT_END}
      isSelected={reply.selectedVariant?.id === credit.id && !displayOnUser}
    >
      {credit.title}
    </CommonStyle.ReplyVariantMessage>
  );
};

export default observer(CreditReplyVariant);
