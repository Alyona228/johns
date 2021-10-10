import React from 'react'
import '../PersonaWork/PersonaWork.css'
import Footer from '../Footer/Footer.js'
import PersonaWork from '../PersonaWork/PersonaWork.js'

export default function PersonaWorkPages(params) {
  return (
    <div className='personaWork'>
      <PersonaWork />
      <Footer />
    </div>
  )
}
