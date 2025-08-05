import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HeaderPage from './pages/HeaderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/header" element={<HeaderPage />} />
      </Routes>
    </Router>
  );
}

export default App; 