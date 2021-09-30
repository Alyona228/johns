import React from 'react'

export default function Public(props) {
  return (
    <div className='works'>
      <div className='work_featured'>
        <div className='works_container'>
          <div className='works_imge'>
            <img src={props.image} alt='рисунок' />
          </div>
          <div className='works_content'>
            <div className='works_title'>{props.title}</div>
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
