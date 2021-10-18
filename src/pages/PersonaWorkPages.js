import React from 'react'
import Footer from '../components/Footer/Footer'
import PersonaWork from '../components/PersonaWork/PersonaWork.js'
import Header from '../components/Header/Header'
export default function PersonaWorkPages(params) {
  return (
    <div className='personaWork'>
      <Header />
      <PersonaWork />
      <Footer />
    </div>
  )
}
