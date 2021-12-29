import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SimpleHoc = (WrappedComponent) => {
  console.log('simpleHoc')

  const handleClick = (v) => {
    console.log('click')
  }

  // eslint-disable-next-line react/display-name
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} handleClick={handleClick} />
    }
  }
}

SimpleHoc.propTypes = {
  handleClick: PropTypes.func
}

export default SimpleHoc
