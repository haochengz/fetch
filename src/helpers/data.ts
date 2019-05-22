import { isPlainObject } from './utils';

export function transformRequestPayload(value: any): any {
  if (isPlainObject(value)) {
    return JSON.stringify(value);
  }
  return value;
}
