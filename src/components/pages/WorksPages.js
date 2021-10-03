import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Works from '../Works'
import '../../styles/WorksPages.css'

export default function WorksPages(props) {
  return (
    <>
      <Header />
      <h1 className='homepages_title'> Work</h1>
      <Works />
      <Footer />
    </>
  )
}
