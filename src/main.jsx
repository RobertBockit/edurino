import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <script src="https://code.jquery.com/jquery-1.7.2.min.js"></script>
      <script src="https://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>
    <App />
  </React.StrictMode>,
)
