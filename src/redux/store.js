/**
 *
 * store合并, 中间件接入
 *
 */

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

// 中间件
const middleware = [thunk]

// 开发环境调用日志打印方法
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV == 'development') {
  // eslint-disable-next-line no-undef
  const { createLogger } = require('redux-logger')
  const loggerMiddleware = createLogger()
  middleware.push(loggerMiddleware)
}

export default createStore(reducers, applyMiddleware(...middleware))
