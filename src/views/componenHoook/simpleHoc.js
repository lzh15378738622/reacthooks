import React, { Component } from 'react'

const simpleHoc = (WrappedComponent) => {
  console.log('simpleHoc')
  // eslint-disable-next-line react/display-name
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
export default simpleHoc
