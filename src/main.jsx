import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FirebaseProvider } from './Context/firebase.jsx' // Import the provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FirebaseProvider/> { /* Wrap App with the provider */ }
  </StrictMode>,
)
