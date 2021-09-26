import React from 'react'
import '../styles/posts.css'
import Post from '../components/Post.js'
export default function Posts(props) {
  return (
    <div className='posts'>
      <div className='posts_container'>
        <div className='posts_header'>Recent posts</div>
        <div className='posts_content'>
          {props.posts.map((post, key) => (
            <Post
              key={key}
              title={post.title}
              date={post.date}
              format={post.format}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
