import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Portfolio from '../Portfolio'
import Posts from '../Posts'
import Works from '../Works'
import '../../styles/HomePages.css'

export default function HomePages(props) {
  return (
    <>
      <Header />
      <Portfolio />
      <Posts />
      <div className='works'>Featured works</div>
      <Works className='works_pages' />
      <Footer />
    </>
  )
}
