import React from 'react'
import '../PersonaWork/PersonaWork.css'
import Footer from '../Footer/Footer.js'
import PersonaWork from '../PersonaWork/PersonaWork.js'
import Header from '../Header/Header'
export default function PersonaWorkPages(params) {
  return (
    <div className='personaWork'>
      <Header />
      <PersonaWork />
      <Footer />
    </div>
  )
}
