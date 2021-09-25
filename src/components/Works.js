import React from 'react'
import '../styles/works.css'
import Image1 from '../img/im1.jpg'
import Image2 from '../img/im2.png'
import Image3 from '../img/im3.jpg'

export default function Works(params) {
  return (
    <div className='works'>
      <div className='work_featured'>
        <div className='works_header'>Featured works</div>
        <div className='works_container'>
          <div className='works_imge'>
            <img src={Image1} alt='рисунок' />
          </div>
          <div className='works_content'>
            <div className='works_title'>Designing Dashboards</div>
            <div className='works_data'>
              <div className='works_data_info'>2020</div>
              <span>Dashboard</span>{' '}
            </div>
            <div className='works_description'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div className='works_container'>
          <div className='works_imge'>
            <img src={Image2} alt='рисунок' />
          </div>
          <div className='works_content'>
            <div className='works_title'>Vibrant Portraits of 2020</div>
            <div className='works_data'>
              <div className='works_data_info'>2020</div>
              <span>Illustration</span>{' '}
            </div>
            <div className='works_description'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div className='works_container'>
          <div className='works_imge'>
            <img src={Image3} alt='рисунок' />
          </div>
          <div className='works_content'>
            <div className='works_title'>36 Days of Malayalam type</div>
            <div className='works_data'>
              <div className='works_data_info'>2020</div>
              <span>Typography</span>{' '}
            </div>
            <div className='works_description'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
