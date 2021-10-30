import React, { useState } from 'react'
import '../Blog/Blog.css'

function Blog() {
  const [blogs] = useState([
    {
      title: 'Ul interactions on the week',
      date: '12 Feb 2019',
      format: 'Express, Handlebars',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'Ul interactions on the week',
      date: '12 Feb 2019',
      format: 'Express, Handlebars',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'Ul interactions on the week',
      date: '12 Feb 2019',
      format: 'Express, Handlebars',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ])
  return (
    <>
      <div className='main'>
        <h1>Blog</h1>

        {blogs.map((blog, key) => (
          <div className='main_blog'>
            <div className='main_blog_title'>{blog.title}</div>
            <div className='main_blog_data'>
              {blog.date}&nbsp;&nbsp;&#10072;&nbsp;&nbsp;
              <span className='main_format'>{blog.format}</span>
            </div>

            <div className='main_blog_text'>{blog.text}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog
