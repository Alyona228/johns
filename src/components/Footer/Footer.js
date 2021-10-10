import React from 'react'
import '../Footer/Footer.css'
import FaceBuck from '../../icons/fb.svg'
import Instagram from '../../icons/insta.svg'
import Twitter from '../../icons/Group.svg'
import Linkedin from '../../icons/Linkedin.svg'

export default function Footer(params) {
  return (
    <div className='footer'>
      <div className='futtet_icon'>
        <a href='#facebook'>
          <img className='footer_icon_i' src={FaceBuck} alt='text' />
        </a>
        <a href='#instagram'>
          <img className='footer_icon_i' src={Instagram} alt='text' />
        </a>
        <a href='#twitter'>
          <img className='footer_icon_i' src={Twitter} alt='text' />
        </a>
        <a href='#LinkedIn'>
          <img className='footer_icon_i' src={Linkedin} alt='text' />
        </a>
      </div>
      <div className='footer_text'>Copyright ©2020 All rights reserved</div>
    </div>
  )
}
