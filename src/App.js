import React from 'react'
import './App.css'
import Header from './components/Header'
import Routing from './components/Routing'
import WorksPages from './components/pages/WorksPages'
import BlogPages from './components/pages/BlogPages'
class App extends React.Component {
  state = {
    title: ['Works', 'Blog'],
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
        {/* <WorksPages title={this.state.title[0]} />
        <BlogPages title={this.state.title[1]} /> */}
      </div>
    )
  }
}

export default App
