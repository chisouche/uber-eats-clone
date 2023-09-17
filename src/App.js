import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css'
import LandingPage from './components/landingPage';

// Import other components for different pages

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Define other routes for different pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
