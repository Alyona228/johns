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
    post:[
      title: [
        'Making a design system from scratch',
        'Creating pixel perfect icons in Figma',
        '',
      ],
      data: [
        
      ]
    ]
    
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Portfolio />
        <Works />
        <Posts title={this.state.title[0]} title1={this.state.title[1]} />
        <Futter />
      </div>
    )
  }
}

export default App
