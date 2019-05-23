import * as util from './utils';

/**
 * buildUrl 构建有查询参数的url
 *
 * @access public
 * @param {string} url前缀
 * @param {any} params? 需要编码到url的参数数组
 * @returns {string} 返回生成的完整url
 */
export function buildUrl(url: string, params?: any): string {
  if (!params) {
    return url;
  }

  const parts = resolveParams(params);
  url = appendParamsToURL(url, parts);

  return url;
}

/**
 * resolveParams 解析参数, 依据不同的参数类型生成不同的字符串
 *
 * @param {any} - 需要解析为字符串数组的参数对象
 * @returns {string[]} - 解析后的字符串数组
 */
function resolveParams(params: any): string[] {
  const parts: string[] = [];

  Object.keys(params).forEach((key: string) => {
    const value = params[key];
    if (value === null || typeof value === 'undefined') {
      return;
    }

    let values = [];
    if (Array.isArray(value)) {
      values = value;
      key += '[]';
    } else {
      values = [value];
    }

    values.forEach(v => {
      if (util.isDate(v)) {
        v = v.toISOString();
      } else if (util.isPlainObject(v)) {
        v = JSON.stringify(v);
      }

      parts.push(`${encode(key)}=${encode(v)}`);
    });
  });

  return parts;
}

/**
 * encode 将字符串编码为url所能识别的字符串
 *
 * @param {string} value - 待编码字符串
 * @returns {string} - 编码后的字符串
 */
function encode(value: string): string {
  return encodeURIComponent(value)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}

/**
 * appendParamsToURL 将编码完成的参数字符串连接到原始url之后
 *
 * @param {string} url - 前缀
 * @param {string[]} params - 完成编码的参数字符串数组
 * @returns {string} - 完成连接的完整url
 */
function appendParamsToURL(url: string, params: string[]): string {
  const serializedParams = params.join('&');
  if (serializedParams) {
    const hashMarkIndex = url.indexOf('#');
    url = hashMarkIndex === -1 ? url : url.slice(0, hashMarkIndex);

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}
