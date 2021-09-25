import React from 'react'
import '../styles/futter.css'
import FaceBuck from '../icons/fb.svg'
import Instagram from '../icons/insta.svg'
import Twitter from '../icons/Group.svg'
import Linkedin from '../icons/Linkedin.svg'

export default function Futter(params) {
  return (
    <div div className='futter'>
      <div className='futtet_icon'>
        <a href='#facebook'>
          <img className='futter_icon_i' src={FaceBuck} alt='text' />
        </a>
        <a href='#instagram'>
          <img className='futter_icon_i' src={Instagram} alt='text' />
        </a>
        <a href='#twitter'>
          <img className='futter_icon_i' src={Twitter} alt='text' />
        </a>
        <a href='#LinkedIn'>
          <img className='futter_icon_i' src={Linkedin} alt='text' />
        </a>
      </div>
      <div className='futter_text'>Copyright ©2020 All rights reserved</div>
    </div>
  )
}
