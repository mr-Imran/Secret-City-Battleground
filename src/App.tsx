import React from 'react';
import { Users, Wifi, Trophy, Cloud, ShieldCheck, Crosshair, Users2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Gallery from './components/Gallery';
import CloudSection from './components/Cloud';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Gallery />
      <CloudSection />
      <Footer />
    </div>
  );
}

export default App;