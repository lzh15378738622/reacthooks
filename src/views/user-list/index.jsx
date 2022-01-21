import React, { useCallback, useEffect, useMemo, useState } from 'react'
import * as pageApi from './api'
// import useBcRequest from '../../hooks/useBcRequest'
import UserInfoModal from './UserInfoModal'
// import useAsync from '../../hooks/useAsync'
import { useGetUsers } from '@/serviceHooks/account'

const UserList = () => {
  const [id, setId] = useState(null)
  // const {
  //   execute: getUsers,
  //   loading: loading,
  //   data: users = [],
  //   error: error
  // } = useAsync(() => pageApi.getUsers())

  const { run, result: users = [], loading, error } = useGetUsers({})
  // const { run: run2, result: users2 = [], loading: loading2, error: error2 } = useGetUsers()
  // useEffect(() => {
  //   getUsers()
  // }, [])

  const showUser = useCallback((id) => {
    setId(id)
  }, [])
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
