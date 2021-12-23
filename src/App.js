import React from 'react'
import { Link, Outlet, Route, Routes, BrowserRouter, useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Root from './views/Root'
import Invoices from './views/invoices'
import Expenses from './views/expenses'
import SplitHooks from './views/splitHooks'
import PriceInput from './views/priceInput'
import ArticleView from './views/article-view'
import UserList from './views/user-list'
import AddEventLisenter from './views/addEventLisenter'
import ComponenHoook from './views/componenHoook'

export default function App() {
  const routes = [
    {
      path: '/invoices',
      element: <Invoices />
    },
    {
      path: '/expenses',
      element: <Expenses />
    },
    {
      path: '/splitHooks',
      element: <SplitHooks />
    },
    {
      path: '/priceInput',
      element: <PriceInput />
    },
    {
      path: '/articleView',
      element: <ArticleView />
    },
    {
      path: '/userList',
      element: <UserList />
    },
    {
      path: '/addEventLisenter',
      element: <AddEventLisenter />
    },
    {
      path: '/componenHoook',
      element: <ComponenHoook />
    },
    {
      path: '/',
      element: <Root />
    }
  ]

  let element = useRoutes(routes)

  return element
}
