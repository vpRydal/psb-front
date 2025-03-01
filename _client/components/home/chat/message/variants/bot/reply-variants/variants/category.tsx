import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC, useMemo } from 'react';

import ChatReplyService from '@services/chat/reply';
import Size from '@specs/_common/size';
import { CategoryData } from '@specs/models/reply-varians-data/category';
import Intent from '@specs/ui/intent';
import { Placement } from '@specs/ui/placement';
import BotMessageStore from '@stores/chat/message/bot';

import * as CommonStyle from '../../../common-style';

export interface BotMessageProps {
  category: CategoryData;
  displayOnUser: boolean;
  disableActions?: boolean;
  message: BotMessageStore;
}
const CategoryReplyVariant: FC<BotMessageProps> = props => {
  const {
    category, displayOnUser, message, disableActions,
  } = props;
  const chatReplyService = useInjection(ChatReplyService);

  function handleClick() {
    if (!disableActions) {
      chatReplyService.selectCategory(category.customer_category_id, message);

      if (!message.reply.selectedVariant) {
        message.reply.selectedVariant = category;
      }
    }
  }

  return (
    <CommonStyle.ReplyVariantMessage
      onClick={displayOnUser ? undefined : handleClick}
      intent={displayOnUser ? undefined : Intent.PRIMARY}
      size={displayOnUser ? Size.MD : Size.SM}
      activeAnge={displayOnUser ? Placement.RIGHT_END : Placement.LEFT_END}
      isSelected={(message.reply.selectedVariant as CategoryData)?.customer_category_id === category.customer_category_id && !displayOnUser}
    >
      {category.name}
    </CommonStyle.ReplyVariantMessage>
  );
};

export default observer(CategoryReplyVariant);
