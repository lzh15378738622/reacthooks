import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DocumentTitle from 'react-document-title'

export default function App() {
  const version = useSelector((state) => {
    return state.appVersion?.appVersion?.v
  })
  // 获得当前 store 的 dispatch 方法
  return (
    <div>
      <h1>Bookkeeper</h1>
      appVersion:{version}
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to='/invoices'>Invoices</Link> |{''}
        <Link to='/expenses'>Expenses</Link> |{''}
        <Link to='/splitHooks'>splitHooks</Link>|{''}
        <Link to='/priceInput'>priceInput</Link>|{''}
        <Link to='/articleView'>articleView</Link>|{''}
        <Link to='/userList'>userList</Link>|{''}
        <Link to='/addEventLisenter'>addEventLisenter</Link>|{''}
      </nav>
      <Outlet />
      <DocumentTitle title='12123'></DocumentTitle>
    </div>
  )
}
