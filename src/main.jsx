import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page/App'
import {Global} from './global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Global/>
    <App />
  </>
)
