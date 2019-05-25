const toString = Object.prototype.toString;

/**
 * isDate 判断是否是日期对象类型
 *
 * @param {any} value
 * @returns {value is Date}
 */
export function isDate(value: any): value is Date {
  return toString.call(value) === '[object Date]';
}

/**
 * isObject 判断是否是一个任意对象
 *
 * @param {any} value
 * @returns {value is Object}
 */
export function isObject(value: any): value is Object {
  return value !== null && typeof value === 'object';
}

/**
 * isPlainObject 判断是否是一个普通的对象
 *
 * @param {any} value
 * @returns {value is Object}
 */
export function isPlainObject(value: any): value is Object {
  return toString.call(value) === '[object Object]';
}
