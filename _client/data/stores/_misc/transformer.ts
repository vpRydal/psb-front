import isArray from "lodash/isArray";
import {isFunction} from "lodash";

export enum TransformEvents {
  /** Вызывается перед валидацией */
  VALIDATE = 'validate',
  /** Вызывается в момент изменения значения */
  CHANGE = 'change'
}
/** По умолчанию применяется трансформация при валидации, использовать только её
 * Трансформация, при изменении сделана на крайний случай
 */
export type TFieldValueTransformerStoreOptions <V extends any> = {
  [key in TransformEvents]?: ((value: V) => V) | Array<(value: V) => V>
} | ((value: V) => V) | Array<(value: V) => V>

export default class FieldValueTransformerStore <V extends any> {
  constructor(protected _transformers?: TFieldValueTransformerStoreOptions<V>) {
  }

  protected getTransformers(event: TransformEvents): ((value: V) => V) | Array<(value: V) => V> {
    return ((isArray(this._transformers) || isFunction(this._transformers)) && event === TransformEvents.VALIDATE) ? this._transformers : this._transformers?.[event]
  }

  protected hasTransformer(event: TransformEvents): boolean {
    const fc = this.getTransformers(event)

    return isArray(fc) ? fc.length > 0 : !!fc
  }

  get hasValidateTransformer(): boolean {
    return this.hasTransformer(TransformEvents.VALIDATE)
  }

  get hasChangeTransformer(): boolean {
    return this.hasTransformer(TransformEvents.CHANGE)
  }

  protected makeTransform(event: TransformEvents, value: V): V {
    const fc = this.getTransformers(event)

    if (isArray(fc)) {
      return fc.reduce((acc, _fc) => _fc(acc), value)
    } else if (fc) {
      return fc(value)
    }

    return value
  }

  makeTransformOnValidate(value: V): V {
    return this.makeTransform(TransformEvents.VALIDATE, value)
  }

  makeTransformOnChange(value: V): V {
    return this.makeTransform(TransformEvents.CHANGE, value)
  }
}
