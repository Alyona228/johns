import React from 'react'
import Footer from '../../Footer/Footer.js'
import Header from '../../Header/Header.js'
import Blog from '../../Blog/Blog.js'

export default function BlogPages(props) {
  return (
    <>
      <Header />

      {props.title}
      <Blog />
      <Footer />
    </>
  )
}
