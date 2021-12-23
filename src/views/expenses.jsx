import React, { useEffect, useCallback } from 'react'
import useAsync from '../hooks/useAsync'

export default function Expenses() {
  const { data, loading, error, execute } = useAsync(async () => {
    const res = await fetch('https://reqres.in/api/users/')
    const json = await res.json()
    return json.data
  })

  useEffect(() => {
    execute()
    console.log(execute(), 123213)
  }, [])

  const handleSimpleStateChange = useCallback(() => {
    console.log(111)
  })

  return (
    <div>
      <div>
        loading: {loading.toString()}
        <br />
        data:{JSON.stringify(data)}
      </div>
    </div>
  )
}
