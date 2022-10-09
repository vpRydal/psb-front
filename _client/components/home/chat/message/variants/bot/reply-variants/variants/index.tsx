import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import Category from '@components/home/chat/message/variants/bot/reply-variants/variants/category';
import Credit from '@components/home/chat/message/variants/bot/reply-variants/variants/credit';
import CustomerReplyVariant from '@components/home/chat/message/variants/bot/reply-variants/variants/customer-type';
import Loan from '@components/home/chat/message/variants/bot/reply-variants/variants/loan';
import LoanType from '@specs/_misc/loan-type';
import ReplyType from '@specs/_misc/reply-type';
import CustomerType from '@specs/_misc/сustomer-type';
import { CategoryData } from '@specs/models/reply-varians-data/category';
import { CreditProduct } from '@specs/models/reply-varians-data/credit';
import ChatStore from '@stores/chat';
import BotMessageStore from '@stores/chat/message/bot';

export interface BotMessageProps {
  value: BotMessageStore['reply']['variants'][0];
  message: BotMessageStore;
  displayOnUser?: boolean;
}
const Variants: FC<BotMessageProps> = props => {
  const { value, displayOnUser = false, message } = props;
  const chatStore = useInjection(ChatStore);
  const getCategoriesAction = chatStore.getServerAction('getCategories');
  const getCreditsAction = chatStore.getServerAction('getCredits');

  const isDisabled = getCreditsAction.isPending || getCategoriesAction.isPending;

  switch (message.reply.type) {
    case ReplyType.CUSTOMER_TYPE: return (
      <CustomerReplyVariant
        disableActions={isDisabled}
        type={value as CustomerType}
        displayOnUser={displayOnUser}
        message={message}
      />
    );
    case ReplyType.LOAN: return (
      <Loan
        type={value as LoanType}
        disableActions={isDisabled}
        message={message}
        displayOnUser={displayOnUser}
      />
    );
    case ReplyType.CATEGORY: return (
      <Category
        category={value as CategoryData}
        disableActions={isDisabled}
        message={message}
        displayOnUser={displayOnUser}
      />
    );

    case ReplyType.CREDIT_VIEW:
    case ReplyType.CREDIT: return (
      <Credit
        credit={value as CreditProduct}
        disableActions={isDisabled}
        message={message}
        displayOnUser={displayOnUser}
      />
    );
    default: return null;
  }
};

export default observer(Variants);
