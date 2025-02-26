import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './PanelControl'
//esto aqui arriba sale por defecto una vez escrito abajo en el strict mode 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl/>
  </StrictMode>,
)
