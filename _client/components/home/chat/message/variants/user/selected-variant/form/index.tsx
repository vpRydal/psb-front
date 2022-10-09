import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';

import ChatReplyService from '@services/chat/reply';
import { Placement } from '@specs/ui/placement';
import ChatStore from '@stores/chat';
import UserMessageStore from '@stores/chat/message/user';
import FormDataReplyVariantsStore from '@stores/chat/reply-variant/form-data';
import Button from '@ui/button';

import * as Style from './style';

export interface FormVariantProps {
  message: UserMessageStore
}
const FormVariant: FC<FormVariantProps> = props => {
  const { message } = props;
  const formDataSore = message.replTo.reply as FormDataReplyVariantsStore;
  const chatReplyService = useInjection(ChatReplyService);
  const { lastMessage, getServerAction } = useInjection(ChatStore);
  const { data } = formDataSore;

  const isDisabled = lastMessage?.id !== message.id;
  const getCreditsAction = getServerAction('getCredits');

  useEffect(() => {
    formDataSore.selectedVariant = {
      term: data.minTerm || 0,
      sum: data.minSum || 0,
    };
  }, []);

  function handleChangeSum(value: number) {
    formDataSore.selectedVariant = { term: formDataSore.selectedVariant?.term || 0, sum: value };
  }

  function handleChangeTerm(value: number) {
    formDataSore.selectedVariant = { term: value, sum: formDataSore.selectedVariant?.sum || 0 };
  }

  function handleClick() {
    chatReplyService.confirmForm(formDataSore.selectedVariant!, message.replTo);
  }

  return (
    <Style.Wrapper activeAnge={Placement.RIGHT_END}>
      <Style.SliderField
        placeholder="Срок кредитования"
        min={data.minTerm}
        max={data.maxTerm}
        label="Год"
        value={formDataSore.selectedVariant?.term || 0}
        isDisabled={isDisabled}
        onChange={handleChangeTerm}
      />
      <Style.SliderField
        placeholder="Сумма кредитования"
        min={data.minSum}
        max={data.maxSum}
        label="RUR"
        value={formDataSore.selectedVariant?.sum || 0}
        isDisabled={isDisabled}
        onChange={handleChangeSum}
      />
      <Button isLoading={getCreditsAction.isPending && !isDisabled} onClick={handleClick} isDisabled={isDisabled}>Отправить</Button>
    </Style.Wrapper>
  );
};

export default observer(FormVariant);
