import React, { useState } from 'react'
import '../Menu/Menu.css'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import Footer from '../Footer/Footer.js'

export default function Menu(props) {
  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose(true)
    setTimeout(() => {
      props.onClose()
    }, 500)
  }

  return (
    <menu className={cn('menu', { menu_close: close })}>
      <div className='menu__background'>
        <div className='background_footer'>
          <Footer />
        </div>
      </div>

      <ul className='menu__list'>
        <li className='menu__item'>
          <NavLink to='/works' className='menu__item'>
            Works
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/'>Contact</NavLink>
        </li>
      </ul>
      <button className='menu__button' onClick={handleClose}>
        <div className='menu__cross'>×</div>
      </button>
    </menu>
  )
}
