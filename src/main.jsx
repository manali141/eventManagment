import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "./styles/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from './Theme/ThemeContext';

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </BrowserRouter>
 
)
