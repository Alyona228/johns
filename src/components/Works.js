import React from 'react'
import '../styles/works.css'
import Image1 from '../img/im1.jpg'
import Image2 from '../img/im2.png'
import Image3 from '../img/im3.jpg'
import Image4 from '../img/im4.jpg'
import Public from './Public'

function Works(props) {
  let job = [
      {
        image: Image1,
        title: 'Designing Dashboards',
        date: '2020',
        format: 'Dashboard',
        description:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.',
      },

      {
        image: Image2,
        title: 'Vibrant Portraits of 2020',
        date: '2018',
        format: 'Illustration',
        description:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.',
      },
      {
        image: Image3,
        title: '36 Days of Malayalam type',
        date: '2018',
        format: 'Typography',
        description:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.',
      },
      {
        image: Image4,
        title: 'Components',
        date: '2018',
        format: 'Components, Design',
        description:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.',
      },
    ],
    ShowMenu = () => {
      this.setState({ showMenu: true })
    }

  return (
    <div>
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
{
  /* <div className='works_container'>
          <div className='works_imge'>
            <img src={Image2} alt='рисунок' />
          </div>
          <div className='works_content'>
            <div className='works_title'>Vibrant Portraits of 2020</div>
            <div className='works_data'>
              <div className='works_data_info'>2020</div>
              <span>Illustration</span>{' '}
            </div>
            <div className='works_description'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div className='works_container'>
          <div className='works_imge'>
            <img src={Image3} alt='рисунок' />
          </div>
          <div className='works_content'>
            <div className='works_title'>36 Days of Malayalam type</div>
            <div className='works_data'>
              <div className='works_data_info'>2020</div>
              <span>Typography</span>{' '}
            </div>
            <div className='works_description'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
      </div> */
}
//
// )}
