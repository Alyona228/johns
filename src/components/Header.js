import React from 'react'
import iconBurg from '../icons/hamburg.svg'
import '../styles/header.css'
import Menu from '../components/Menu.js'
import Work from '../components/Work'
import Works from '../components/Works'
import { Route, NavLink } from 'react-router-dom'
import Portfolio from '../components/Portfolio'
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
                    {' '}
                    Works{' '}
                  </NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink to='/work' className='menu_link'>
                    {' '}
                    Blog{' '}
                  </NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink to='/works' className='menu_link'>
                    {' '}
                    Contact{' '}
                  </NavLink>{' '}
                </li>
              </ul>
              <button onClick={props.ShowMenu}>
                <img src={iconBurg} alt='это бургер' className='img' />
              </button>
            </nav>
          </div>
        </div>
      </div>
      {/* <Route path='/' exact component={Works} /> */}
      <Route path='/work' exact component={Work} />
      <Route path='/works' exact component={Works} />
      <Menu menu={props.showMenu} />
    </div>
  )
}
