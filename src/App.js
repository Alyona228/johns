import React from 'react'
import './App.css'
import Header from './components/Header'
import Routing from './components/Routing'

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
        <Routing />
      </div>
    )
  }
}

export default App
