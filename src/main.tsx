import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import LoginAndRegister from './components/public/components/login_and_register.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginAndRegister />
  </React.StrictMode>,
)
