import React from 'react'
import '../styles/PersonaWork.css'
import Restangle from '../img/Rectangle4.png'
import Restangle1 from '../img/Rectangle 5.png'
import Restangle2 from '../img/Rectangle 6.png'
import Footer from './Footer'

export default function PersonaWork(props) {
  return (
    <div className='work_content'>
      <div class='work_title'>Designing Dashboards with usability in mind</div>
      <div class='work_content_data'>
        <div class='data'>2020</div>
        <span>Dashboard, User Experience Design</span>{' '}
      </div>
      <div class='work_text'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div class='work_img'>
        <img src={Restangle} alt='картинка' />
        <div class='work_h_big'>Heading 1</div>
        <div class='work_hsmol'>Heading 2</div>
        <div class='text'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div class='work_img-between'>
          <img src={Restangle1} alt='картинка' />
        </div>
        <div class='work_img-futter'>
          <img src={Restangle2} alt='картинка' />
        </div>
      </div>
      <Footer />
    </div>
  )
}
