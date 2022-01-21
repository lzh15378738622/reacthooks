import React, { Component } from 'react'
import simpleHoc from './simpleHoc'
import { getArticle } from './api'
import PropTypes from 'prop-types'

@simpleHoc
export default class User extends Component {
  componentDidMount() {
    console.log(this.props)
    getArticle().then((res) => {
      console.log(res)
    })
  }
  render() {
    const { handleClick } = this.props
    return <div onClick={() => handleClick(1321)}>点击</div>
  }
}
User.propTypes = {
  handleClick: PropTypes.func
}

// export default simpleHoc(User)
