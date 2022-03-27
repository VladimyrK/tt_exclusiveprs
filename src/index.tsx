import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './scss/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/tt_exclusiveprs/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
