import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Roadmap } from './components/Roadmap';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
}

export default App;