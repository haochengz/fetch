import { IRequestConfig } from './declare';

function xhr(config: IRequestConfig): void {
  const { url, method = 'get', data = null } = config;
  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);
  request.send(data);
}

export default xhr;
