import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
function App() {
  return (<Router>
    <Routes>
      <Route path="/" element={<div>hello</div>} />
      <Route path="/about" element={<div>hi</div>} />
    </Routes>
  </Router>)
}

export default App
