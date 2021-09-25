import { render } from '@testing-library/react'
import React from 'react'
import './App.css'
import Futter from './components/Futter'
import Portfolio from './components/Portfolio'
import Posts from './components/Posts'
import Works from './components/Works'
import Header from './components/Header'

class App extends React.Component {
  state = {
    post: [
      {
        title: [
          'Making a design system from scratch',
          'Creating pixel perfect icons in Figma',
          '',
        ],
      },
      {
        data: ['12 Feb 2020', '12 Feb 2020'],
      },
      {
        format: ['Design, Pattern', 'Figma, Icon Design'],
      },
    ],
  }
  addChange = () => {
    let i = this.state.post[1].data[1]
    return console.log(i)
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Portfolio addChange={this.addChange} />
        <Works />
        <Posts
          title={this.state.post[0].title[0]}
          title1={this.state.post[0].title[1]}
          data={this.state.post[1].data[0]}
          data1={this.state.post[1].data[1]}
          format={this.state.post[2].format[0]}
          format1={this.state.post[2].format[1]}
        />
        <Futter />
      </div>
    )
  }
}

export default App
