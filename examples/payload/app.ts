
import fetch from '../../src/fetch';

// send an array as parameters
fetch({
  method: 'post',
  url: '/simple/payload',
  data: {
    name: 'Mike S. Huffpaff',
    age: 31
  }
});

