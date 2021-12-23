import React, { useCallback, useEffect, useMemo, useState } from 'react'
import * as pageApi from './api'
import bcUseRequest from '../../hooks/bcUseRequest'
import UserInfoModal from './UserInfoModal'
import useAsync from '../../hooks/useAsync'

const UserList = () => {
  const [id, setId] = useState(null)
  // const {
  //   execute: getUsers,
  //   loading: loading,
  //   data: users = [],
  //   error: error
  // } = useAsync(() => pageApi.getUsers())

  const { run, result: users = [], loading, error } = bcUseRequest(() => pageApi.getUsers())

  // useEffect(() => {
  //   getUsers()
  // }, [])

  const showUser = useCallback(
    (id) => {
      setId(id)
    },
    [id]
  )
  console.log('index')
  const hideUser = useCallback(() => setId(null), [])
  if (loading && !users) return 'loading'
  return (
    <div>
      {users.length && (
        <ul>
          {users.map((user, i) => (
            <li key={i}>
              <a href='#' onClick={() => showUser(user.id)}>
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {id && <UserInfoModal id={id} onOk={() => hideUser()} onClose={() => hideUser()} />}
    </div>
  )
}

export default UserList
