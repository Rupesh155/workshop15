import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
let app='iplauctionssssss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App    a={app} />
  </StrictMode>,
)
