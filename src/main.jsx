import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // Chỉ gọi App ra là đủ, vì App đã chứa Roadmap rồi

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)