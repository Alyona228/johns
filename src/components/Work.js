import React from 'react'
import '../styles/work.css'
import image1 from '../img/im1.jpg'
import image2 from '../img/im2.png'
import image3 from '../img/im3.jpg'
import image4 from '../img/im4.jpg'
import Footer from './Footer'
import Header from './Header'

export default function Work(props) {
  return (
    <div>
      <Header />
      <h2>Work</h2>
      <div class='work'>
        <div class='work_cont'>
          <div class='work_img'>
            <img src={image1} alt='рисунок' />
          </div>
          <div class='work_content'>
            <div class='work_content_h'>Designing Dashboards</div>
            <div class='work_content_data'>
              <div class='data'>2020</div>
              <span>Dashboard</span>{' '}
            </div>
            <div class='work_content_p'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div class='work_cont'>
          <div class='work_img'>
            <img src={image2} alt='рисунок' />
          </div>
          <div class='work_content'>
            <div class='work_content_h'>Vibrant Portraits of 2020</div>
            <div class='work_content_data'>
              <div class='data'>2020</div>
              <span>Illustration</span>{' '}
            </div>
            <div class='work_content_p'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div class='work_cont'>
          <div class='work_img'>
            <img src={image3} alt='рисунок' />
          </div>
          <div class='work_content'>
            <div class='work_content_h'>36 Days of Malayalam type</div>
            <div class='work_content_data'>
              <div class='data'>2020</div>
              <span>Typography</span>{' '}
            </div>
            <div class='work_content_p'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div class='work_cont'>
          <div class='work_img'>
            <img src={image4} alt='рисунок' />
          </div>
          <div class='work_content'>
            <div class='work_content_h'>Components</div>
            <div class='./'>
              <div class='data'>2020</div>
              <span>Components, Design</span>{' '}
            </div>
            <div class='work_content_p'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
