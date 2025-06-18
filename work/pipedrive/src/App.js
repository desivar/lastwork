// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages from the 'pages' folder
// Make sure these paths are correct relative to App.js
import HomePage from './pages/HomePage';
import PipelinesPage from './pages/PipelinesPage'; // Assuming you renamed CRMDashboard.js to PipelinesPage.js

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Home Page (Landing Page) */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the Pipelines Dashboard Page */}
        <Route path="/pipelines" element={<PipelinesPage />} />

        {/* Placeholder for future pages: */}
        {/* <Route path="/users" element={<div>Users Page Coming Soon!</div>} /> */}
        {/* <Route path="/customers" element={<div>Customers Page Coming Soon!</div>} /> */}
        {/* You will replace these with actual components when you build them */}
      </Routes>
    </Router>
  );
}

export default App;