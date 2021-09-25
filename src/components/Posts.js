import React from 'react'
import '../styles/posts.css'
import Post from '../components/Post.js'
export default function Posts(props) {
  return (
    <div className='posts'>
      <div className='posts_container'>
        <div className='posts_header'>Recent posts</div>
        <div className='posts_content'>
          <Post title={props.title} />
          <div className='posts_post'>
            <div className='posts_title'>{props.title1}</div>
            <div className='posts_info'>
              <div className='posts_date'>12 Feb 2020</div>
              <div className='posts_format'>Design, Pattern</div>
            </div>
            <div className='posts_text'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do&nbsp;amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
