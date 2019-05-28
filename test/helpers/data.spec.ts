import { transformRequestPayload } from '../../src/helpers/data';

describe('transformRequestPayload test', () => {
  it('should return as what passes in if it is not a plain object', () => {
    const now = new Date();
    const result = transformRequestPayload(now);
    expect(result).toEqual(now);
  });

  it('should return a json stringify string if a plain object passes in', () => {
    const result = transformRequestPayload({ name: 'mike' });
    expect(result).toEqual('{"name":"mike"}');
  });
});
