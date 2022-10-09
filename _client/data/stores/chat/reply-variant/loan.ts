import { makeObservable, observable } from 'mobx';

import LoanType from '@specs/_misc/loan-type';
import ReplyType from '@specs/_misc/reply-type';
import LoanReplyVariantsData from '@specs/models/reply-varians-data/loan';
import BaseReplyVariantStore from '@stores/chat/reply-variant/base';

export default class LoanReplyVariantsStore extends BaseReplyVariantStore {
  type = ReplyType.LOAN

  @observable.ref
  selectedVariant: LoanType | undefined

  constructor(public data: LoanReplyVariantsData) {
    super();
    makeObservable(this);
  }

  get variants() {
    return this.data;
  }
}
