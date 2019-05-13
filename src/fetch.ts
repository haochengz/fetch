// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { IRequestConfig } from './declare'
import xhr from './xhr'

function fetch(config: IRequestConfig): void {
  xhr(config)
}

export default fetch
