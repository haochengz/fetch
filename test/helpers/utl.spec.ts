import { buildUrl } from '../../src/helpers/url';

describe('buildUrl tests', () => {
  it('should return orignal url if params is none', () => {
    const result = buildUrl('http://google.com');
    expect(result).toBe('http://google.com');
  });

  it('should return url with query if passes a query in', () => {
    const result = buildUrl('http://google.com', { q: 'some stuff' });
    expect(result).toBe('http://google.com?q=some+stuff');
  });

  it('should ignore the null or undefined query value', () => {
    const result = buildUrl('http://google.com', { q: null });
    expect(result).toBe('http://google.com');
  });

  it('should receive array as query value', () => {
    const result = buildUrl('http://google.com', { q: ['hello', 'world', '!'] });
    expect(result).toBe('http://google.com?q[]=hello&q[]=world&q[]=!');
  });

  it('should receive date object as query value', () => {
    const result = buildUrl('http://google.com', { q: new Date('2019-5-27') });
    expect(result).toBe('http://google.com?q=2019-05-26T16:00:00.000Z');
  });

  it('should receive plain object as query value', () => {
    const result = buildUrl('http://google.com', { q: { name: 'mike', age: 30 } });
    expect(result).toBe('http://google.com?q=%7B%22name%22:%22mike%22,%22age%22:30%7D');
  });

  it('should ignore the hash tag of the url', () => {
    const result = buildUrl('http://google.com#hash', { q: 'some stuff' });
    expect(result).toBe('http://google.com?q=some+stuff');
  });

  it('should add query if there are already queries in url', () => {
    const result = buildUrl('http://google.com?q=find+some', { skip: 10 });
    expect(result).toBe('http://google.com?q=find+some&skip=10');
  });

  it('should encode @ to %40 in url string, but replace it to @ back', () => {
    const result = buildUrl('http://google.com', { q: 'admin@gmail.com' });
    expect(result).toBe('http://google.com?q=admin@gmail.com');
  });

  it('should encode & to %26 in url string', () => {
    const result = buildUrl('http://google.com', { q: 'Joe&Jill' });
    expect(result).toBe('http://google.com?q=Joe%26Jill');
  });
});
