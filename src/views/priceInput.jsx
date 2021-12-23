import React, { useState, useCallback } from 'react'
import PriceInput from '../components/PriceInput'

// Example Wrapper
// eslint-disable-next-line react/display-name
export default () => {
  const [price, setPrice] = useState()
  return (
    <>
      <PriceInput value={price} onChange={setPrice} />
      <p>{JSON.stringify(price)}</p>
    </>
  )
}
