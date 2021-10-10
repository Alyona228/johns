import React, { useState } from 'react'
import '../Works/Works.css'
import Image1 from '../../img/im1.jpg'
import Image2 from '../../img/im2.png'
import Image3 from '../../img/im3.jpg'
import Image4 from '../../img/im4.jpg'
import Public from '../Public/Public.js'

function Works() {
  const [job] = useState([
    {
      id: 1,
      image: Image1,
      title: 'Designing Dashboards',
      date: '2020',
      format: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.',
    },

    {
      id: 2,
      image: Image2,
      title: 'Vibrant Portraits of 2020',
      date: '2018',
      format: 'Illustration',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 3,
      image: Image3,
      title: '36 Days of Malayalam type',
      date: '2018',
      format: 'Typography',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 4,
      image: Image4,
      title: 'Components',
      date: '2018',
      format: 'Components, Design',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.',
    },
  ])

  return (
    <div>
      <div className='works'>Featured works</div>
      {job.map((work, key) => (
        <Public
          key={key}
          image={work.image}
          title={work.title}
          date={work.date}
          format={work.format}
          description={work.description}
        />
      ))}
    </div>
  )
}
export default Works
