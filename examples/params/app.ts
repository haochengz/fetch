
import fetch from '../../src/fetch';

fetch({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
});
