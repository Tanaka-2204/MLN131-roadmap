import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MacLeninRoadmap from './Roadmap.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MacLeninRoadmap />
  </StrictMode>,
)
