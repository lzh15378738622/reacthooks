import { useState, useCallback } from 'react'

const useAsync = (asyncFunction) => {
  // 设置三个异步逻辑相关的 state
  const [callBackD, setCallBackD] = useState({ loading: true, data: null, error: null })
  // 定义一个 callback 用于执行异步逻辑
  const execute = useCallback(() => {
    // 请求开始时，设置 loading 为 true，清除已有数据和 error 状态
    setCallBackD({ loading: true, data: null, error: null })
    return asyncFunction()
      .then((response) => {
        // 请求成功时，将数据写进 state，设置 loading 为 false
        setCallBackD({ loading: false, data: response.data, error: null })
      })
      .catch((error) => {
        // 请求失败时，设置 loading 为 false，并设置错误状态
        setCallBackD({ loading: false, data: null, error: error })
      })
  }, [asyncFunction])
  return { execute, ...callBackD }
}

export default useAsync
