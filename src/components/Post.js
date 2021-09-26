import React from 'react'

import '../styles/posts.css'

export default function Post(props) {
  return (
    <div className='posts_post'>
      <div className='posts_title'>{props.title}</div>
      <div className='posts_info'>
        <div className='posts_date'> {props.date}</div>
        <div className='posts_format'>{props.format}</div>
      </div>
      <div className='posts_text'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do&nbsp;amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
    </div>
  )
}
