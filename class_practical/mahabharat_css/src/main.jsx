import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mahabharat from './Mahabharat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mahabharat/>
  </StrictMode>,
)
