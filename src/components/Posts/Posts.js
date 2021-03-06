import React, { useState } from 'react'
import '../Posts/Posts.css'
import Post from '../Post/Post.js'

function Posts() {
  const [posts] = useState([
    {
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      format: 'Design, Pattern',
    },

    {
      title: 'Creating pixel perfect icons in Figma',
      date: '12 Feb 2020',
      format: 'Figma, Icon Design',
    },
  ])

  return (
    <div className='posts'>
      <div className='posts_container'>
        <div className='posts_header'>
          <p>Recent posts</p>
          <p className='post_header_right'>View all</p>
        </div>

        <div className='posts_content'>
          {posts.map((post, key) => (
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
export default Posts
