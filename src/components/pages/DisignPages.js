import React from 'react'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import Portfolio from '../Portfolio/Portfolio.js'
import Posts from '../Posts/Posts.js'
import Works from '../Works/Works.js'

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
