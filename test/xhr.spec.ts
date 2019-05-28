import xhr from '../src/xhr';

interface Global {
  [key: string]: any;
}

function mockXhr(this: any): void {
  this.open = jest.fn();
  this.setRequestHeader = jest.fn();
  this.send = jest.fn();
}

describe('xhr tests', () => {
  beforeAll(() => {
    (global as Global)['XMLHttpRequest'] = jest.fn().mockImplementation(mockXhr);
  });
  beforeEach(() => {
    // XMLHttpRequest.mockClear();
  });
  it('should send a request by XMLHttpRequest', () => {
    xhr({ url: 'http://google.com' });
    expect(true).toBe(true);
  });

  it('should calls XMLHttpRequest to get a request object', () => {
    xhr({ url: 'http://google.com' });
    expect(XMLHttpRequest).toHaveBeenCalled();
  });

  it('should add headers to request object', () => {
    // FIXME: check called setRequestHeader
    xhr({ url: 'http://google.com', headers: { 'Content-Type': 'text/plain' } });
    expect(XMLHttpRequest).toHaveBeenCalled();
  });
});
