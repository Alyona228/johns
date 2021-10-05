import React from 'react'
import '../styles/menu.css'
import iconBurg from '../icons/hamburg.svg'
import { NavLink } from 'react-router-dom'

export default function Menu(props) {
  return (
    <div className='header_content'>
      <div className=''>
        <div className='header_burger'>
          <button onClick={props.MobailShowMenu}>
            <img src={iconBurg} alt='это бургер' className='img' />
          </button>
        </div>
        {props.menu ? (
          <nav className='heder_discreption'>
            <ul className='menu_ul'>
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
        ) : undefined}

        {/* <Router>
          <Switch>
            <Route exact path='/work' component={Work} />
          </Switch>
        </Router> */}
      </div>
    </div>
  )
}
