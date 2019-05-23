import { isPlainObject } from './utils';

/**
 * processHeaders 处理头部, 包括一般化和添加必须的头部字段
 *
 * @param {any} headers
 * @param {any} data
 * @returns {any} - 处理后的头部对象
 */
export function processHeaders(headers: any, data: any): any {
  if (!headers) {
    headers = {};
  }
  normalizeHeaders(headers, 'Content-Type');
  if (isPlainObject(data)) {
    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }
  } else {
    delete headers['Content-Type'];
  }
  return headers;
}

/**
 * normalizeHeaders 一般化头部字段, 去除大小写冲突
 *
 * @param {any} headers
 * @param {string} name - 需要做一般化的头部字段
 * @returns {void}
 */
function normalizeHeaders(headers: any, name: string): void {
  Object.keys(headers).forEach(item => {
    if (item !== name && item.toLowerCase() === name.toLowerCase()) {
      headers[name] = headers[item];
      delete headers[item];
    }
  });
}
