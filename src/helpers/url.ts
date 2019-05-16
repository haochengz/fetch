import * as util from './utils';

export function buildUrl(url: string, params?: any): string {
  if (!params) {
    return url;
  }

  const parts = resolveParams(params);
  url = appendParamsToURL(url, parts);

  return url;
}

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

function appendParamsToURL(url: string, params: string[]): string {
  const serializedParams = params.join('&');
  if (serializedParams) {
    const hashMarkIndex = url.indexOf('#');
    url = hashMarkIndex === -1 ? url : url.slice(0, hashMarkIndex);

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

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
      } else if (util.isObject(v)) {
        v = JSON.stringify(v);
      }

      parts.push(`${encode(key)}=${encode(v)}`);
    });
  });

  return parts;
}
