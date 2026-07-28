import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SitePage from './pages/SitePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SitePage />
  </StrictMode>,
)
