import React from 'react'
import Footer from '../../components/Footer/Footer.js'
import Header from '../../components/Header/Header.js'
import Blog from '../../components/Blog/Blog.js'

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
