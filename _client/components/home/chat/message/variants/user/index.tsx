import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import SelectedVariant from '@components/home/chat/message/variants/user/selected-variant';
import UserMessageStore from '@stores/chat/message/user';

import * as CommonStyle from '../common-style';

export interface UserMessageProps {
  message: UserMessageStore
}
const UserMessage: FC<UserMessageProps> = props => {
  const { message } = props;
  return (
    <CommonStyle.Wrapper>
      <SelectedVariant message={message} />
    </CommonStyle.Wrapper>
  );
};

export default observer(UserMessage);
