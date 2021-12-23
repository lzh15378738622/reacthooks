import React from 'react'
import Proptypes from 'prop-types'

const CommentList = ({ data = [] }) => {
  return (
    <div className='exp-09-comment-list'>
      <h3>Comments ({data.length})</h3>
      <dl>
        {data.map((item) => (
          <>
            <dt key={item.id}>{item.user}</dt>
            <dd>{item.content}</dd>
          </>
        ))}
      </dl>
    </div>
  )
}
CommentList.propTypes = {
  data: Proptypes.array
}

export default CommentList
