import { isFunction } from 'lodash';
import isArray from 'lodash/isArray';

export enum TransformEvent {
  /** Вызывается перед валидацией */
  VALIDATE = 'validate',
  /** Вызывается в момент изменения значения */
  CHANGE = 'change'
}
/** По умолчанию применяется трансформация при валидации, использовать только её
 * Трансформация, при изменении сделана на крайний случай
 */
export type FieldValueTransformerStoreOptions<V> = {
  [key in TransformEvent]?: ((value: V) => V) | Array<(value: V) => V>
} | ((value: V) => V) | Array<(value: V) => V>

export default class FieldValueTransformerStore <V> {
  constructor(protected _transformers?: FieldValueTransformerStoreOptions<V>) {
  }

  protected getTransformers(event: TransformEvent): ((value: V) => V) | Array<(value: V) => V> | undefined {
    if ((isArray(this._transformers) || isFunction(this._transformers)) && event === TransformEvent.VALIDATE) {
      return this._transformers;
    }

    if (!isFunction(this._transformers) && !isArray(this._transformers)) {
      return this._transformers?.[event];
    }
    return undefined;
  }

  protected hasTransformer(event: TransformEvent): boolean {
    const fc = this.getTransformers(event);

    return isArray(fc) ? fc.length > 0 : !!fc;
  }

  get hasValidateTransformer(): boolean {
    return this.hasTransformer(TransformEvent.VALIDATE);
  }

  get hasChangeTransformer(): boolean {
    return this.hasTransformer(TransformEvent.CHANGE);
  }

  protected makeTransform(event: TransformEvent, value: V): V {
    const fc = this.getTransformers(event);

    if (isArray(fc)) {
      return fc.reduce((acc, _fc) => _fc(acc), value);
    } if (fc) {
      return fc(value);
    }

    return value;
  }

  makeTransformOnValidate(value: V): V {
    return this.makeTransform(TransformEvent.VALIDATE, value);
  }

  makeTransformOnChange(value: V): V {
    return this.makeTransform(TransformEvent.CHANGE, value);
  }
}
