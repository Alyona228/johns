import React, { useState } from 'react'
import '../Header/Header.css'
import Menu from '../Menu/Menu.js'
import { NavLink } from 'react-router-dom'
import iconBurg from '../../icons/hamburg.svg'
function Header() {
  const [menu, setMenu] = useState(false)
  const mobileShowMenu = () => {
    setMenu(!menu)
  }

  return (
    <div>
      <div className='header'>
        <div className='header_content'>
          <div className='header_menu'>
            <nav className='menu_body'>
              <ul className='menu_list'>
                <li>
                  <NavLink to='/works' className='menu_link'>
                    Works
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/blog' className='menu_link'>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/' className='menu_link'>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <button className='header__button' onClick={mobileShowMenu}>
        <img className='header__burger' src={iconBurg} />
      </button>
      {menu && <Menu menu={menu} onClose={mobileShowMenu} />}
    </div>
  )
}
export default Header
