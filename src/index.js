import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { PrijaveProvider } from './data/prijaveContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PrijaveProvider>

      <App />
      </PrijaveProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
