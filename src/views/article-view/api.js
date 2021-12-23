import request from '../../utils/request'
export function getArticle(id) {
  return request({
    url: `/posts/${id}`,
    method: 'get'
  })
}

export function getCommentList() {
  return request({
    url: '/comments',
    method: 'get'
  })
}

export function getUser(id) {
  return request({
    url: `/users/${id}`,
    method: 'get'
  })
}
