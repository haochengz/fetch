
import fetch from '../../src/fetch';

// send an array as parameters
fetch({
  method: 'get',
  url: '/simple/params',
  params: {
    arr: ['foo', 'bar', 'baz']
  }
});

// send an object as parameters
fetch({
  method: 'get',
  url: '/simple/params',
  params: {
    obj: {
      name: 'Mike',
      age: 10
    }
  }
});

const now = new Date()
// send a date as parameters
fetch({
  method: 'get',
  url: '/simple/params',
  params: {
    now
  }
});

// send a string of these: !@#$%^&*, and a space
fetch({
  method: 'get',
  url: '/simple/params',
  params: {
    str: '@:!$, '
  }
});

// send an object with a null field, that should be ignored
fetch({
  method: 'get',
  url: '/simple/params',
  params: {
    fieldA: 'hello',
    fieldB: null,
    fieldC: undefined
  }
});

// send params with url which had a hash tag
fetch({
  method: 'get',
  url: '/simple/params#index',
  params: {
    name: 'McMilan'
  }
});

// append params directly if there are params on the url already
fetch({
  method: 'get',
  url: '/simple/params?foo=bar',
  params: {
    bar: 'baz'
  }
});
