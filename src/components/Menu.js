import React from 'react'
import '../styles/menu.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Work from '../components/Work.js'
import iconBurg from '../icons/hamburg.svg'
export default function Menu(props) {
  return (
    <div className='header_content'>
      <div className=''>
        {props.menu ? (
          <div className='header_burger'>
            <button onClick={props.ShowMenu}>
              <img src={iconBurg} alt='это бургер' className='img' />
            </button>
            <nav className='heder_discreption'>
              <ul className='menu_ul'>
                <li>
                  <a href='./src/work.html' className='menu_li'>
                    Works
                  </a>
                </li>
                <li>
                  <a href='./src/blog.html' className='menu_li'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='./src/contact.html' className='menu_li'>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        ) : undefined}

        <Router>
          <Switch>
            <Route exact path='/work' component={Work} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}
