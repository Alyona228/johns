import React from 'react'
import './App.css'
import Header from './components/Header'
import Routing from './components/Routing'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Routing />
      </div>
    )
  }
}

export default App
