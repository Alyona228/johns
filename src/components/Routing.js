import React from 'react'
import { Route } from 'react-router'
import HomePages from './pages/HomePages'
import Posts from './Posts'
import Works from './Works'

export default function Routing(props) {
  return (
    <>
      <Route path='/' exact component={HomePages} />
      <Route path='/portfolio' exact component={Posts} />
      <Route path='/posts' exact component={Works} />
    </>
  )
}
