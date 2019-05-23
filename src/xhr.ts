import { IRequestConfig } from './declare';

function xhr(config: IRequestConfig): void {
  const { url, method = 'get', data = null, headers = {} } = config;
  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);
  Object.keys(headers).forEach(name => {
    request.setRequestHeader(name, headers[name]);
  });

  request.send(data);
}

export default xhr;
