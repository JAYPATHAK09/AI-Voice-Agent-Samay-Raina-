import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import VoiceAgent from './components/VoiceAgent';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
      
      <Footer />
      
      {/* ElevenLabs Voice Agent Integration */}
      <VoiceAgent />
    </div>
  );
}

export default App;