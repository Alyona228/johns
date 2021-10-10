import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../src/components/App/App.js'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>,{application}</React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
