import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import App from './3/1/App3'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
