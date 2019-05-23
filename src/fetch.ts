// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { IRequestConfig } from './declare';
import xhr from './xhr';
import { buildUrl } from './helpers/url';
import { transformRequestPayload } from './helpers/data';
import { processHeaders } from './helpers/header';

function fetch(config: IRequestConfig): void {
  xhr(processConfig(config));
}

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
