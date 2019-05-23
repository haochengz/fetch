
import fetch from '../../src/fetch';

fetch({
  method: 'post',
  url: '/simple/payload',
  data: {
    name: 'Mike S. Huffpaff',
    age: 31
  }
});

fetch({
  method: 'post',
  url: '/simple/payload',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Accecpt': 'application/json, text/plain, */*'
  },
  data: {
    name: 'Mike S. Huffpaff',
    age: 33
  }
});

const qString = 'q=URLUtils.searchParams&topic=api';
const qParams = new URLSearchParams(qString);
fetch({
  method: 'post',
  url: '/simple/payload',
  data: qParams
});

