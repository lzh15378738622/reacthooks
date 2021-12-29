import request from '../../utils/request'
export function getArticle(id) {
  return request({
    url: '/api/articles',
    method: 'get'
  })
}
