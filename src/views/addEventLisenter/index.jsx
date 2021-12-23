import React, { useCallback, useEffect, useRef, useState } from 'react'

// domNode default to document.body
const useKeyPress = (domref = document.body) => {
  const [key, setKey] = useState(null)
  useEffect(() => {
    const handleKeyPress = ({ offsetX, offsetY }) => {
      setKey({ offsetX, offsetY })
    }
    if (!domref.current) return null
    domref.current.addEventListener('mousemove', handleKeyPress)
    return () => {
      domref.current.removeEventListener('mousemove', handleKeyPress)
    }
  }, [domref])

  return key
}

const Listener = () => {
  const domRef = useRef(null)
  let res = useKeyPress(domRef) || {}

  return (
    <div id='w11' ref={domRef}>
      <h1>UseKeyPress</h1>
      <label>offsetX: {res.offsetX || 'N/A'}</label>
      <label>offsetY: {res.offsetY || 'N/A'}</label>
    </div>
  )
}
export default Listener
