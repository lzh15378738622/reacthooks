import { useRequest } from 'ahooks'
import { useMemo } from 'react'

// run,
//     runAsync,
//     refresh,
//     refreshAsync,
//     mutate,
//     cancel
const useBcRequest = (asyncF, options) => {
  let { data: resData, ...res } = useRequest(asyncF, options)
  const result = useMemo(() => {
    if (resData?.status === 200) {
      return resData.data
    }
    return {}
  }, [resData])
  debugger
  return { result, ...res }
}
export default useBcRequest

// data	service 返回的数据	TData | undefined
// error	service 抛出的异常	Error | undefined
// loading	service 是否正在执行	boolean
// params	当次执行的 service 的参数数组。比如你触发了 run(1, 2, 3)，则 params 等于 [1, 2, 3]	TParams | []
// run
// 手动触发 service 执行，参数会传递给 service
// 异常自动处理，通过 onError 反馈
// (...params: TParams) => void
// runAsync	与 run 用法一致，但返回的是 Promise，需要自行处理异常。	(...params: TParams) => Promise<TData>
// refresh	使用上一次的 params，重新调用 run	() => void
// refreshAsync	使用上一次的 params，重新调用 runAsync	() => Promise<TData>
// mutate	直接修改 data	(data?: TData / ((oldData?: TData) => (TData / undefined))) => void
// cancel	取消当前正在进行的请求	() => void
