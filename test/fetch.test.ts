import fetch from '../src/fetch'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('should be a function', () => {
    expect(typeof fetch).toEqual('function')
  })
})
