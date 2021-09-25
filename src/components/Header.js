import React from 'react'
import iconBurg from '../icons/hamburg.svg'
import '../styles/header.css'
export default function Header() {
  return (
    <div className='header'>
      <div classNameName='header_menu'>
        <nav className='menu_body'>
          <ul className='menu_list'>
            <li>
              <a href='./src/work.html' className='menu_link'>
                Works{' '}
              </a>
            </li>
            <li>
              <a href='./src/blog.html' className='menu_link'>
                Blog{' '}
              </a>
            </li>
            <li>
              <a href='./src/contact.html' className='menu_link'>
                Contact{' '}
              </a>
            </li>
            <div>
              <img src={iconBurg} alt='это бургер' className='img' />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  )
}
