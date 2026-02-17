import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Vision from './components/Vision';
import ProductShowcase from './components/ProductShowcase';
import PreOrderBanner from './components/PreOrderBanner';
import Footer from './components/Footer';
import ProductDetailImage from './components/ProductDetailImage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductDetailImage />
        <FeatureGrid />
        <Vision />
        <ProductShowcase />
        <PreOrderBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;