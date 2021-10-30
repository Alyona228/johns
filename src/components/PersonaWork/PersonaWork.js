import React from 'react'
import '../PersonaWork/PersonaWork.css'
import Restangle from '../../img/Rectangle4.png'
import Restangle1 from '../../img/Rectangle 5.png'
import Restangle2 from '../../img/Rectangle 6.png'

export default function PersonaWork() {
  return (
    <div className='persona_content'>
      <div className='persona_title'>
        Designing Dashboards with usability in mind
      </div>
      <div className='work_content_data'>
        <div className='data'>2020</div>
        <span>Dashboard, User Experience Design</span>{' '}
      </div>
      <div className='persona_text'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div className='persona_img'></div>
      <img src={Restangle} alt='картинка' className='persona_img' />
      <div className='work_h_big'>Heading 1</div>
      <div className='work_hsmol'>Heading 2</div>
      <div className='persona_text'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div className='work_img-between'>
        <img src={Restangle1} alt='картинка' className='persona_img' />
      </div>
      <div className='work_img-futter'>
        <img src={Restangle2} alt='картинка' className='persona_img' />
      </div>
    </div>
  )
}
