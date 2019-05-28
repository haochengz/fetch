import xhr from '../src/xhr';
import fetch from '../src/fetch';

jest.mock('../src/xhr');

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('should be a function', () => {
    expect(typeof fetch).toEqual('function');
  });

  it('should send a request by xhr', () => {
    fetch({ url: 'http://google.com' });
    expect(xhr).toHaveBeenCalledTimes(1);
  });
});
