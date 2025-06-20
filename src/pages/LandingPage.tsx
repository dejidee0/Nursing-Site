import React from 'react';
import Hero from '../components/Hero';
import NewsEvents from '../components/NewsEvents';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <NewsEvents />
    </div>
  );
};

export default LandingPage;