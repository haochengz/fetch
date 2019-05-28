import { isDate, isObject, isPlainObject } from '../../src/helpers/utils';

describe('isDate tests', () => {
  it('should returns a boolean value', () => {
    const val: boolean = isDate({});
    expect(typeof val).toBe('boolean');
  });
  it('should returns true if passes a Date in', () => {
    const now = new Date();
    const result = isDate(now);
    expect(result).toBe(true);
  });
  it('should returns false if passes a string in', () => {
    const result = isDate('2019-5-25');
    expect(result).toBe(false);
  });
  it('should returns false if passes a number in', () => {
    const result = isDate(1558791622863);
    expect(result).toBe(false);
  });
  it('should returns false if passes a time number in', () => {
    const now = new Date();
    const time = now.getTime();
    const result = isDate(time);
    expect(result).toBe(false);
  });
  it('should returns false if passes a null in', () => {
    const result = isDate(null);
    expect(result).toBe(false);
  });
});

describe('isObject tests', () => {
  it('should returns true if a object passes in', () => {
    const result = isObject({});
    expect(result).toBe(true);
  });
  it('should returns true if a Date object passes in', () => {
    const result = isObject(new Date());
    expect(result).toBe(true);
  });
  it('should returns false if a null passes in', () => {
    const result = isObject(null);
    expect(result).toBe(false);
  });
  it('should returns false if a string passes in', () => {
    const result = isObject('string');
    expect(result).toBe(false);
  });
});

describe('isPlainObject tests', () => {
  it('should returns true if a object passes in', () => {
    const result = isPlainObject({});
    expect(result).toBe(true);
  });
  it('should returns false if a Date object passes in', () => {
    const now = new Date();
    const result = isPlainObject(now);
    expect(result).toBe(false);
  });
  it('should returns false if a null passes in', () => {
    const result = isObject(null);
    expect(result).toBe(false);
  });
  it('should returns false if a string passes in', () => {
    const result = isObject('string');
    expect(result).toBe(false);
  });
});
