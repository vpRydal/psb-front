import { makeObservable, observable } from 'mobx';

import ReplyType from '@specs/_misc/reply-type';
import CategoryReplyVariantsData, { CategoryData } from '@specs/models/reply-varians-data/category';
import BaseReplyVariantsStore from '@stores/chat/reply-variant/base';

export default class CategoryReplyVariantsStore extends BaseReplyVariantsStore {
  type = ReplyType.CATEGORY;

  @observable.ref
  selectedVariant: CategoryData | undefined

  constructor(public data: CategoryReplyVariantsData) {
    super();
    makeObservable(this);
  }

  get variants() {
    return this.data.categories;
  }
}
