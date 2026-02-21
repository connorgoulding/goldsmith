import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AutomationScan from './Scan';
import ScanResults from './Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scan" element={<AutomationScan />} />
        <Route path="/results" element={<ScanResults />} />
      </Routes>
    </Router>
  );
}

export default App;