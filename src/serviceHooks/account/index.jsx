import request from '@/utils/request'
import useBcRequest from '@/utils/useBcRequest'
import API_PREFIX from '@/utils/const'

export function useGetUsers(data) {
  const { run, result, loading, error } = useBcRequest(() =>
    request({
      url: `/users`,
      method: 'get'
    })
  )
  return { run, result, loading, error }
}
