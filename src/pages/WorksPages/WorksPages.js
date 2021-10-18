import React from 'react'
import Footer from '../../components/Footer/Footer.js'
import Header from '../../components//Header/Header.js'
import Works from '../../components/Works/Works.js'
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
