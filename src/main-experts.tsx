import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExpertsPage from './pages/ExpertsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExpertsPage />
  </StrictMode>,
)
