import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App'
import {Global} from './global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>,
)
