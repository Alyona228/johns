import React from 'react'
import { Route } from 'react-router'
import HomePages from './pages/HomePages'
import WorksPages from './pages/WorksPages'
import BlogPages from './pages/BlogPages'

export default function Routing(props) {
  return (
    <>
      <Route path='/' exact component={HomePages} />
      <Route path='/works' exact component={WorksPages} />
      <Route path='/blog' exact component={BlogPages} />
    </>
  )
}
