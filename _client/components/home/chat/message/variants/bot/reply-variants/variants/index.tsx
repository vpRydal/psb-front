import React, { FC, memo } from 'react';

import Category from '@components/home/chat/message/variants/bot/reply-variants/variants/category';
import CustomerReplyVariant from '@components/home/chat/message/variants/bot/reply-variants/variants/customer-type';
import Loan from '@components/home/chat/message/variants/bot/reply-variants/variants/loan';
import LoanType from '@specs/_misc/loan-type';
import ReplyType from '@specs/_misc/reply-type';
import CustomerType from '@specs/_misc/сustomer-type';
import { CategoryData } from '@specs/models/reply-varians-data/category';
import BotMessageStore from '@stores/chat/message/bot';

export interface BotMessageProps {
  value: BotMessageStore['reply']['variants'][0];
  message: BotMessageStore;
  displayOnUser?: boolean;
}
const Variants: FC<BotMessageProps> = props => {
  const { value, displayOnUser = false, message } = props;

  switch (message.reply.type) {
    case ReplyType.CUSTOMER_TYPE: return (
      <CustomerReplyVariant
        type={value as CustomerType}
        displayOnUser={displayOnUser}
        message={message}
      />
    );
    case ReplyType.LOAN: return (
      <Loan type={value as LoanType} message={message} displayOnUser={displayOnUser} />
    );
    case ReplyType.CATEGORY: return (
      <Category category={value as CategoryData} message={message} displayOnUser={displayOnUser} />
    );
    default: return null;
  }
};

export default memo(Variants);
