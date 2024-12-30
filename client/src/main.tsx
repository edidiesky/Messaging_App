import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ProviderLayout from './providers/StoreProvider.tsx'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderLayout>
        <App />
      </ProviderLayout>
    </BrowserRouter>
 
   
  </StrictMode>,
)