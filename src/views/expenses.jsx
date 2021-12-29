import React, { useEffect } from 'react'
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
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [])

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
