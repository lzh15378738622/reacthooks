import React, { useState, useEffect } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState('Tom')

  useEffect(() => {
    console.log(user, email)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <div className='week'>
      <label>
        User:
        <select value={user} onChange={(e) => setUser(e.target.value)}>
          <option value='Tom'>Tom</option>
          <option value='Jack'>Jack</option>
        </select>
      </label>
      <label style={{ display: 'block', marginTop: 16 }}>
        Email:
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
    </div>
  )
}
export default App
