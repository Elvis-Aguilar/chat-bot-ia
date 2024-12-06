import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./index.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
