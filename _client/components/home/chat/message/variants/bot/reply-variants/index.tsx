import uniqueId from 'lodash/uniqueId';
import { observer } from 'mobx-react-lite';
import React, {
  FC, ReactNode, useMemo, useState,
} from 'react';

import Variants from '@components/home/chat/message/variants/bot/reply-variants/variants';
import LoanType from '@specs/_misc/loan-type';
import ReplyType from '@specs/_misc/reply-type';
import { CreditProduct } from '@specs/models/reply-varians-data/credit';
import BotMessageStore from '@stores/chat/message/bot';

import * as CommonStyle from '../../common-style';
import * as Style from './style';

export interface BotMessageProps {
  message: BotMessageStore
}
const ReplyVariants: FC<BotMessageProps> = props => {
  const { message } = props;

  const [show, setShow] = useState(false);
  const { reply } = message;

  const [mortgageCredits, defaultCredits] = useMemo(() => {
    const _mortgageCredits: CreditProduct[] = [];
    const _defaultCredits: CreditProduct[] = [];

    if (reply.type === ReplyType.CREDIT || reply.type === ReplyType.CREDIT_VIEW) {
      (reply.variants as CreditProduct[]).forEach(credit => {
        if (credit.type_of_loan === LoanType.MORTGAGE) {
          _mortgageCredits.push(credit);
        } else {
          _defaultCredits.push(credit);
        }
      });
    }

    return [_mortgageCredits, _defaultCredits];
  }, []);

  const hasAdditionalProducts = !!mortgageCredits.length && !!defaultCredits.length;

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
        <Variants key={uniqueId('Variants-')} value={value} message={message} />
      )));
      case ReplyType.LOAN: return renderWrapper(message.reply.variants.map(value => (
        <Variants key={uniqueId('Variants-')} value={value} message={message} />
      )));
      case ReplyType.CATEGORY: return renderWrapper(message.reply.variants.map(value => (
        <Variants key={uniqueId('Variants-')} value={value} message={message} />
      )));
      case ReplyType.CREDIT_VIEW:
      case ReplyType.CREDIT: return renderWrapper((hasAdditionalProducts || (!!mortgageCredits.length && !defaultCredits.length)
        ? mortgageCredits : defaultCredits).map(value => (
          <Variants key={uniqueId('Variants-')} value={value} message={message} />
      )));
      default: return null;
    }
  }
  return (
    <CommonStyle.Wrapper>
      {renderContent()}
      {!show && hasAdditionalProducts && (
        <Style.AdditionalLink onClick={() => setShow(true)}>
          Также вас могут заинтересовать кредиты
        </Style.AdditionalLink>
      )}
      <CommonStyle.ReplyVariantsWrapper>
        {hasAdditionalProducts && show && defaultCredits.map(value => (
          <Variants key={uniqueId('Variants-')} value={value} message={message} />
        ))}
      </CommonStyle.ReplyVariantsWrapper>
    </CommonStyle.Wrapper>
  );
};

export default observer(ReplyVariants);
