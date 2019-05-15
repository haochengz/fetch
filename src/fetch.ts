// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { IRequestConfig } from './declare'
import xhr from './xhr'
import { buildUrl } from './helpers/url'

function fetch(config: IRequestConfig): void {
  xhr(processConfig(config))
}

function processConfig(config: IRequestConfig): IRequestConfig {
  // append params to url
  config.url = buildUrl(config.url, config.params)
  return config
}

export default fetch
