import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom' // needs to be installed with "npm install react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Browser Router gives the react web page the ability to change pages by adding the "/pageName" to the url */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
