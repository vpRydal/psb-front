import { makeObservable, observable } from 'mobx';

import ReplyType from '@specs/_misc/reply-type';
import { CategoryData } from '@specs/models/reply-varians-data/category';
import FormReplyData from '@specs/models/reply-varians-data/form-data';
import BaseReplyVariantStore from '@stores/chat/reply-variant/base';

export default class FormDataReplyVariantsStore extends BaseReplyVariantStore {
  type = ReplyType.FORM_DATA

  @observable.ref
  selectedVariant: FormReplyData | undefined

  constructor(public data: CategoryData) {
    super();
    makeObservable(this);
  }

  get variants() {
    return [];
  }
}
