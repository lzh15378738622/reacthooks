import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
// import useAsync from "../hooks/useAsync";

export default function Invoices() {
  const [users, setUsers] = useState(null)
  const [time, setTime] = useState(0)
  const [isPause, setIsPause] = useState(false)

  const [searchKey, setSearchKey] = useState('')
  let timer = useRef(1)
  const inputRef = useRef(1)
  useEffect(() => {
    const doFetch = async () => {
      // 组件首次加载时发请求获取用户数据
      const res = await fetch('https://reqres.in/api/users/')
      setUsers(await res.json())
    }
    doFetch()
    return () => {
      clearInterval(timer.current)
    }
  }, [])

  const usersToShow = useMemo(() => {
    if (!users) return null
    return users.data.filter((user) => {
      return user.first_name.includes(searchKey)
    })
  }, [users, searchKey])

  const handleBtn2 = useCallback(() => {
    if (!isPause) {
      timer.current = setInterval(() => {
        setTime((time) => ++time)
      }, 100)
    } else {
      console.log(timer, inputRef)
      clearInterval(timer.current)
    }
    setIsPause(!isPause)
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [isPause, time])

  const [couter, setCouter] = useState(0)
  const couterRef = useRef(null)
  const handleAddCoute = useCallback(() => {
    const val = couterRef.current.value
    setCouter(+couter + +val)
  }, [couter])

  return (
    <div>
      plus:
      <input type='number' ref={couterRef} />
      {couter}
      <button onClick={handleAddCoute}>add</button>
      <div></div>
      setInterval+clearInterval:
      <br />
      <div>
        {time}
        <button onClick={handleBtn2}>{isPause ? '暂停' : '开始'}</button>
      </div>
      <input
        ref={inputRef}
        type='text'
        value={searchKey}
        onChange={(evt) => setSearchKey(evt.target.value)}
      />
      <ul>
        {usersToShow &&
          usersToShow.length > 0 &&
          usersToShow.map((user) => {
            return <li key={user.id}>{user.first_name}</li>
          })}
      </ul>
    </div>
  )
}
