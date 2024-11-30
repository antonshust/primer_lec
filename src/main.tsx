import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import App from './2/3/Gallery2'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
