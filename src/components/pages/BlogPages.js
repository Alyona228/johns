import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import '../../styles/BlogPages.css'
import Blog from '../Blog'

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
