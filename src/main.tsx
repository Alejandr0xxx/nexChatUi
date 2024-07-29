import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthMemory from './services/authMemory.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthMemory>
      <App />
    </AuthMemory>
  </React.StrictMode>,
)
