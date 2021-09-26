import { render } from '@testing-library/react'
import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Posts from './components/Posts'
import Works from './components/Works'
import Header from './components/Header'
import Work from './components/Work'
import { Route, NavLink, Switch } from 'react-router-dom'

class App extends React.Component {
  state = {
    posts: [
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
    ],
    showMenu: false,
  }
  ShowMenu = () => {
    this.setState({ showMenu: true })
  }
  render() {
    return (
      <div className='App'>
        <Header ShowMenu={this.ShowMenu} showMenu={this.state.showMenu} />
        <Portfolio />
        <Works />
        <Posts posts={this.state.posts} />
        <Footer />
      </div>
    )
  }
}

export default App
