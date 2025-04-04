import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVzMGB3Tcj_rRgTxF3Q2i1WDwQ-8LCun4",
  authDomain: "karune-coder.firebaseapp.com",
  projectId: "karune-coder",
  storageBucket: "karune-coder.firebasestorage.app",
  messagingSenderId: "754657732163",
  appId: "1:754657732163:web:e7672e737bc96cb78a16f6"
};


initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
