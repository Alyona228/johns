import React from 'react'
import Footer from '../../Footer/Footer.js'
import Header from '../../Header/Header.js'
import Works from '../../Works/Works.js'
import '../WorksPages/WorksPages.css'

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
