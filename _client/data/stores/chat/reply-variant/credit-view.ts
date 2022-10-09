import { makeObservable, observable } from 'mobx';

import ReplyType from '@specs/_misc/reply-type';
import CreditReplyVariantsData, { CreditProduct } from '@specs/models/reply-varians-data/credit';
import BaseReplyVariantsStore from '@stores/chat/reply-variant/base';

export default class CreditViewReplyVariantsStore extends BaseReplyVariantsStore {
  type = ReplyType.CREDIT_VIEW

  @observable.ref
  selectedVariant: undefined

  constructor(public data: CreditReplyVariantsData, public readonly credit: CreditProduct) {
    super();
    makeObservable(this);
  }

  get variants() {
    return this.data.products;
  }
}
