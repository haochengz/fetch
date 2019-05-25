import { isDate } from '../../src/helpers/utils';

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

// describe('isObject tests', () => {
// it('should skip');
// })
//
// describe('isPlainObject tests', () => {
// it('should skip');
// })
