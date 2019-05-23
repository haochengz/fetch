import { isPlainObject } from './utils';

/**
 * transformRequestPayload 将对象编码为JSON字符串
 *
 * @param {any} value
 * @returns {any} - 编码后的JSON字符串, 如果传入参数不是普通对象, 则返回那个参数
 */
export function transformRequestPayload(value: any): any {
  if (isPlainObject(value)) {
    return JSON.stringify(value);
  }
  return value;
}
