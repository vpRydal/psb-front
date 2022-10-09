import { makeObservable, observable } from 'mobx';

import ReplyType from '@specs/_misc/reply-type';
import CreditReplyVariantsData from '@specs/models/reply-varians-data/credit';
import BaseReplyVariantsStore from '@stores/chat/reply-variant/base';

export default class CreditReplyVariantsStore extends BaseReplyVariantsStore {
  type = ReplyType.CREDIT

  @observable.ref
  selectedVariant = undefined

  constructor(public data: CreditReplyVariantsData) {
    super();
    makeObservable(this);
  }

  get variants() {
    return [];
  }
}
