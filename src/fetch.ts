// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { IRequestConfig } from './declare';
import xhr from './xhr';
import { buildUrl } from './helpers/url';
import { transformRequestPayload } from './helpers/data';
import { processHeaders } from './helpers/header';

/**
 * fetch 入口函数
 *
 * @param {IRequestConfig} config - request配置对象
 * @returns {void}
 */
function fetch(config: IRequestConfig): void {
  // FIXME: 所接受参数的有效性处理, url必有, params无或必须是对象
  // headers无或必须是对象, data无或必须是对象
  xhr(processConfig(config));
}

/**
 * 处理用户传入的config对象, 包括处理url, header等
 * @param {IRequestConfig} config - 用户传入的config对象
 * @returns {IRequestConfig} - 返回处理后的config对象, 可以直接传入xhr()发送http请求
 */
function processConfig(config: IRequestConfig): IRequestConfig {
  // append params to url
  config.url = buildUrl(config.url, config.params);

  // add and normalize headers to config
  config.headers = processHeaders(config.headers, config.data);

  // transform the data object to json string
  config.data = transformRequestPayload(config.data);

  return config;
}

export default fetch;
