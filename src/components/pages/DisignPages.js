import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Portfolio from '../Portfolio'
import Posts from '../Posts'
import Works from '../Works'

export default function HomePages(props) {
  return (
    <>
      <Header />
      <Portfolio />
      <Posts />
      <Works />
      <Footer />
    </>
  )
}
