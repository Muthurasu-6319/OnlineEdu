import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminApp from './AdminApp.jsx'

const isRouteAdmin = window.location.pathname === '/admin' || window.location.pathname === '/admin/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isRouteAdmin ? <AdminApp /> : <App />}
  </StrictMode>,
)
