import { isPlainObject } from './utils';

function normalizeHeaders(headers: any, name: string): void {
  Object.keys(headers).forEach(item => {
    if (item !== name && item.toLowerCase() === name.toLowerCase()) {
      headers[name] = headers[item];
      delete headers[item];
    }
  });
}

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
