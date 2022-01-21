import useBcRequest from '../../yhooks/useBcRequest'
import React from 'react'
import { Modal } from 'antd'
import * as pageApi from '../article-view/api'
import PropTypes from 'prop-types'

const UserInfoModal = ({ id, ...rest }) => {
  // const { result: user = {}, error } = {}
  console.log('UserInfoModal')
  const { result: user = {}, error } = useBcRequest(() => pageApi.getUser(id))
  return (
    <Modal visible={!!id} className='exp-10-user-info-modal' {...rest}>
      {error && 'Fetch failed.'}
      {user ? (
        <div className='exp-10-user-info-modal'>
          <img src={user.avatar} alt='' />
          <label>{user.name}</label>
          <p>{user.introduction}</p>
        </div>
      ) : (
        'Loading...'
      )}
    </Modal>
  )
}
UserInfoModal.propTypes = {
  id: PropTypes.string
}
export default UserInfoModal

// export default React.memo(UserInfoModal)
// export default function UserInfoModalWrapper({ id, ...rest }) {
//   if (!id) return null
//   return <UserInfoModal id={id} {...rest} />
// }
