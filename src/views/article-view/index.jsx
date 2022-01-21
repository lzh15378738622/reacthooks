import React, { useEffect, useState } from 'react'
import * as pageApi from './api'
import useAsync from '../../yhooks/useAsync'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
const ARTICLE_LIST = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' },
  { id: 3, title: 'Article 3' },
  { id: 4, title: 'Article 4' }
]
const PageView = function () {
  const [id, setId] = useState(1)
  return (
    <div className='exp-09-article-view-wrapper'>
      <ul>
        {ARTICLE_LIST.map(({ id, title }, i) => (
          <li key={i} onClick={() => setId(id)}>
            {title}
          </li>
        ))}
      </ul>

      <hr />

      <ArticleView id={id} />
    </div>
  )
}

const ArticleView = ({ id }) => {
  const {
    execute: getArticle,
    loading: loading1,
    data: article = {},
    error: error1
  } = useAsync(() => pageApi.getArticle(id))
  const {
    execute: getCommentList,
    loading: loading2,
    data: comments = [],
    error: error2
  } = useAsync(() => pageApi.getCommentList(id))

  const {
    execute: getUser,
    loading: loading3,
    data: user = {},
    error: error3
  } = useAsync(() => pageApi.getUser(id))

  // eslint-disable-next-line  react-hooks/exhaustive-deps
  useEffect(() => {
    getArticle(id)
    getCommentList(id)
    getUser(id)
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [id])

  if (!article) return loading1

  return (
    <div className='exp-09-article-view'>
      <h1>
        {id}. {article.title}
      </h1>
      {user && (
        <div className='user-info'>
          <img src={user.avatar} height='40px' alt='user' />
          <div>{user.name}</div>
          <div>{user.introduction}</div>
          <div>{article.createdAt}</div>
        </div>
      )}
      <p>{article.content}</p>
      <CommentList data={comments || []} />
    </div>
  )
}
ArticleView.propTypes = {
  id: PropTypes.string
}

export default PageView
