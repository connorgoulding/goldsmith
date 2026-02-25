import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import MarketingCMOPage from './MarketingCMOPage';
import AutomationScan from './Scan';
import ScanResults from './Results';
import BlogIndex from './BlogIndex';
import BlogPost from './BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketing" element={<MarketingCMOPage />} />
        <Route path="/scan" element={<AutomationScan />} />
        <Route path="/results" element={<ScanResults />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;