import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
/**
 * value structure:
 * {
 *   amount: 10,
 *   currency: 'rmb'
 * }
 *
 */

function PriceInput({ value = { amount: 0, currency: 'rmb' }, onChange = () => {} }) {
  const handleChange = useCallback(
    (deltaValue) => {
      onChange({
        ...value,
        ...deltaValue
      })
    },
    [value, onChange]
  )
  return (
    <div className='exp-02-price-input'>
      <input value={value.amount} onChange={(evt) => handleChange({ amount: evt.target.value })} />
      <select
        value={value.currency}
        onChange={(evt) => handleChange({ currency: evt.target.value })}
      >
        <option value='rmb'>RMB</option>
        <option value='dollar'>Dollar</option>
        <option value='eur'>EUR</option>
      </select>
    </div>
  )
}
PriceInput.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func
}

export default PriceInput
