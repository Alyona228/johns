import React from 'react'
import '../Portfolio/Portfolio.css'
import Avatar from '../../img/john.jpg'
export default function Portfolio(props) {
  let dateTimeNow = new Date().toLocaleString()
  return (
    <div className='portfolio'>
      <div className='portfolio_biography'>
        <div className='portfolio_content'>
          <div className='portfolio_name'>
            Hi, I am John, Creative Technologist
            <p>сейчас:{dateTimeNow}</p>
          </div>
          <div className='portfolio_description'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.Exercitation
            veniam consequat sunt nostrud amet{' '}
          </div>
          <button className='portfolio_btn'>Donload Resume</button>
        </div>
        <div className='portfolio_photo'>
          <img src={Avatar} alt='text' />
        </div>
      </div>
    </div>
  )
}
