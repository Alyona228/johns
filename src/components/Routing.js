import React from 'react'
import { Route } from 'react-router'
import HomePages from '../pages/HomePages/HomePages.js'
import WorksPages from '../pages/WorksPages/WorksPages.js'
import BlogPages from '../pages/BlogPages/BlogPages.js'
import PersonaWorkPages from '../pages/PersonaWorkPages.js'

export default function Routing(props) {
  return (
    <>
      <Route path='/' exact component={HomePages} />
      <Route path='/works' exact component={WorksPages} />
      <Route path='/blog' exact component={BlogPages} />
      <Route path='/persona' exact component={PersonaWorkPages} />
      <Route path='/johns' exact component={HomePages} />
    </>
  )
}
