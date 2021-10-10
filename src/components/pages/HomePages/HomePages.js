import React, { useState } from 'react'
import Footer from '../../Footer/Footer.js'
import Header from '../../Header/Header.js'
import Portfolio from '../../Portfolio/Portfolio.js'
import Posts from '../../Posts/Posts.js'
import Works from '../../Works/Works.js'
import '../HomePages/HomePages.css'

function HomePages(job) {
  const [work, setWork] = useState([job])
  const b = () => setWork([job.splice(3)])

  return (
    <>
      <Header />
      <Portfolio />
      <Posts />
      {work.map((works, key) => (
        <Works className='works_pages' key={key} />
      ))}

      <Footer />
    </>
  )
}
export default HomePages
