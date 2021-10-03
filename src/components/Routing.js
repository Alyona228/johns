import React from 'react'
import { Route } from 'react-router'
import HomePages from './pages/HomePages'
import WorksPages from './pages/WorksPages'
import BlogPages from './pages/BlogPages'
import PersonaWorkPages from './pages/PersonaWorkPages'

export default function Routing(props) {
  return (
    <>
      <Route path='/' exact component={HomePages} />
      <Route path='/works' exact component={WorksPages} />
      <Route path='/blog' exact component={BlogPages} />
      <Route path='/persona' exact component={PersonaWorkPages} />
    </>
  )
}
