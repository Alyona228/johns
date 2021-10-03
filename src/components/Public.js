import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Public(props) {
  return (
    <div className='works'>
      <div className='work_featured'>
        <div className='works_container'>
          <div className='works_imge'>
            <img src={props.image} alt='рисунок' />
          </div>
          <div className='works_content'>
            <div className='works_title'>
              <nav className='menu_body'>
                <NavLink to='/persona' className='menu_link'>
                  {props.title}
                </NavLink>
              </nav>
            </div>
            <div className='works_data'>
              <div className='works_data_info'>{props.date}</div>
              <span>{props.format}</span>
            </div>
            <div className='works_description'>{props.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
