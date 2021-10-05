import React, { useState } from 'react'
import '../styles/header.css'
import Menu from '../components/Menu.js'
import { NavLink } from 'react-router-dom'

function Header() {
  const [menu, setMenu] = useState([{ menu: false }])
 const  MobailShowMenu = {
    setMenu([{
      menu: true,
    }])
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
      <Menu menu={menu} MobailShowMenu={MobailShowMenu} />
    </div>
  )
}
export default Header
