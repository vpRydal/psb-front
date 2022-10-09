import { computed, makeObservable, observable } from 'mobx';

import ReplyType from '@specs/_misc/reply-type';
import CustomerType from '@specs/_misc/сustomer-type';
import CustomerTypeReplyVariantsData from '@specs/models/reply-varians-data/customer-type';
import BaseReplyVariantsStore from '@stores/chat/reply-variant/base';

export default class CustomerTypeReplyVariantsStore extends BaseReplyVariantsStore {
  type = ReplyType.CUSTOMER_TYPE

  @observable.ref
  selectedVariant: CustomerType | undefined

  constructor(public data: CustomerTypeReplyVariantsData) {
    super();
    makeObservable(this);
  }

  @computed
  get variants() {
    return [CustomerType.JURISTIC_PERSON, CustomerType.PRIVATE_PERSON];
  }
}
