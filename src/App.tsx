import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/faq" element={<div className="py-20 text-center"><h1 className="text-3xl font-bold">FAQ Page</h1><p className="mt-4 text-gray-600">Coming soon...</p></div>} />
            <Route path="/support" element={<div className="py-20 text-center"><h1 className="text-3xl font-bold">Support Page</h1><p className="mt-4 text-gray-600">Coming soon...</p></div>} />
          </Routes>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;