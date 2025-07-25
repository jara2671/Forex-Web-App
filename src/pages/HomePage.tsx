import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TradingPlatform from '../components/TradingPlatform';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <TradingPlatform />
      <Footer />
    </div>
  );
};

export default HomePage;