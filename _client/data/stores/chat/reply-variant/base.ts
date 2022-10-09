import ReplyType from '@specs/_misc/reply-type';

export default abstract class BaseReplyVariantsStore {
  abstract readonly type: ReplyType;

  abstract readonly data: any

  abstract readonly selectedVariant: any

  abstract get variants(): any[]
}
