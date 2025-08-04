import React from 'react';
import HeroSection from '../components/HeroSection';
import TransformSection from '../components/TransformSection';
import FutureSection from '../components/FutureSection';
import ScrollIndicator from '../components/ScrollIndicator';

const HomePage = () => {
  return (
    <div className="home-page">
      <ScrollIndicator />
      <HeroSection />
      <TransformSection />
      <FutureSection />
    </div>
  );
};

export default HomePage;