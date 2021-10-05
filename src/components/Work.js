import React from 'react'
import '../styles/work.css'
import image1 from '../img/im1.jpg'
import image2 from '../img/im2.png'
import image3 from '../img/im3.jpg'
import image4 from '../img/im4.jpg'
import Footer from './Footer'
import Header from './Header'

export default function Work({ props }) {
  return (
    <div>
      <Header />
      <div className='work'>
        <div className='work_cont'>
          <div className='work_img'>
            <img src={image1} alt='рисунок' />
          </div>
          <div className='work_content'>
            <div className='work_content_h'>Designing Dashboards</div>
            <div className='work_content_data'>
              <div className='data'>2020</div>
              <span>Dashboard</span>{' '}
            </div>
            <div className='work_content_p'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div className='work_cont'>
          <div className='work_img'>
            <img src={image2} alt='рисунок' />
          </div>
          <div className='work_content'>
            <div className='work_content_h'>Vibrant Portraits of 2020</div>
            <div className='work_content_data'>
              <div className='data'>2020</div>
              <span>Illustration</span>{' '}
            </div>
            <div className='work_content_p'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div className='work_cont'>
          <div className='work_img'>
            <img src={image3} alt='рисунок' />
          </div>
          <div className='work_content'>
            <div className='work_content_h'>36 Days of Malayalam type</div>
            <div className='work_content_data'>
              <div className='data'>2020</div>
              <span>Typography</span>{' '}
            </div>
            <div className='work_content_p'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div className='work_cont'>
          <div className='work_img'>
            <img src={image4} alt='рисунок' />
          </div>
          <div className='work_content'>
            <div className='work_content_h'>Components</div>
            <div className='./'>
              <div className='data'>2020</div>
              <span>Components, Design</span>{' '}
            </div>
            <div className='work_content_p'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
