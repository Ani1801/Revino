import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import AboutUs from './pages/AboutUs';
import AIAutomation from './pages/AIAutomation';
import DigitalTransformation from './pages/DigitalTransformation';
import RewardsHub from './pages/RewardsHub';
import Loyalty from './pages/Loyalty';
import Marketing from './pages/Marketing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <Routes>
          {/* Redirect root to about page */}
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/rewards-hub" element={<RewardsHub />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/marketing" element={<Marketing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;