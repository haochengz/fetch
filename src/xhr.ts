import { IRequestConfig } from './declare';

/**
 * xhr 发送XMLHttpRequest
 *
 * @param {IRequestConfig} config
 * @returns {void}
 */
function xhr(config: IRequestConfig): void {
  const { url, method = 'get', data = null, headers = {} } = config;
  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);

  // 将headers添加到request中
  Object.keys(headers).forEach(name => {
    request.setRequestHeader(name, headers[name]);
  });

  request.send(data);
}

export default xhr;
