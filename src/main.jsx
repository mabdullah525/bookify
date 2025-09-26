import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { FirebaseProvider } from './Context/firebase.jsx' // Import the provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <FirebaseProvider /> { /* Wrap App with the provider */}
    </BrowserRouter>
  </StrictMode>,
)
