import React, { Component } from 'react'
import simpleHoc from './simpleHoc'

@simpleHoc
class User extends Component {
  componentDidMount() {
    console.log(1)
  }
  render() {
    return <div>21323424</div>
  }
}
// export default simpleHoc(User)
