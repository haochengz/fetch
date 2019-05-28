import { IRequestConfig } from '../../src/declare';
import { processHeaders } from '../../src/helpers/header';

describe('processHeaders process', () => {
  it('should returns a empty object if nothing passes in', () => {
    const config: IRequestConfig = { url: 'http://google.com' };
    const result = processHeaders(config.headers, config.data);
    expect(result).toEqual({});
  });

  it('should normalize Content-Type from lower/upper case to capitalized', () => {
    const config: IRequestConfig = {
      url: 'http://google.com',
      headers: {
        'content-type': 'text/plain',
      },
      data: {
        payload: 'text',
      },
    };
    const result = processHeaders(config.headers, config.data);
    expect(result).toEqual({
      'Content-Type': 'text/plain',
    });
  });

  it('should determine the content-type if data was a plain object', () => {
    const config: IRequestConfig = {
      url: 'http://google.com',
      data: {
        payload: 'text',
      },
    };
    const result = processHeaders(config.headers, config.data);
    expect(result).toEqual({
      'Content-Type': 'application/json;charset=utf-8',
    });
  });

  it('should delete content-type if no data passes in', () => {
    const config: IRequestConfig = {
      url: 'http://google.com',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };
    const result = processHeaders(config.headers, config.data);
    expect(result).toEqual({});
  });
});
