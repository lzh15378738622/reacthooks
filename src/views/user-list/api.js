import request from '../../utils/request'

export function getUsers(id) {
  return request({
    url: `/users`,
    method: 'get'
  })
}
