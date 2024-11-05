import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'
import { createRoot } from 'react-dom/client'
import {ThemeProvider} from "./components/SwitchMode/ThemeContext.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
