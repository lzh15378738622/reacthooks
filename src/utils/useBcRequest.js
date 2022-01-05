import { useRequest } from 'ahooks'
import { useMemo } from 'react'
const useBcRequest = (asyncF, options) => {
  let { run, data: resData, loading, error } = useRequest(asyncF, options)
  const result = useMemo(() => {
    if (resData?.status === 200) {
      return resData.data
    }
    return {}
  }, [resData])
  return { run, result, loading, error }
}
export default useBcRequest
