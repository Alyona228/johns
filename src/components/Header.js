import React from 'react'
import '../styles/header.css'
import Menu from '../components/Menu.js'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
  return (
    <div>
      <div className='header'>
        <div className='header_content'>
          <div className='header_menu'>
            <nav className='menu_body'>
              <ul className='menu_list'>
                <li>
                  <NavLink to='/' className='menu_link'>
                    Works
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/portfolio' className='menu_link'>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/posts' className='menu_link'>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Menu menu={props.showMenu} />
    </div>
  )
}
