import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkoutGenerator from './components/WorkoutGenerator';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import VoiceAgent from './components/VoiceAgent';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div className="h-full bg-neon-yellow shadow-[0_0_10px_#DFFF00]" style={{ width: '0%', animation: 'scroll-progress linear' }}></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <WorkoutGenerator />
        <HowItWorks />
        <Testimonials />
      </main>
      
      <Footer />
      
      {/* ElevenLabs Voice Agent Integration */}
      <VoiceAgent />

      <style>{`
        @keyframes scroll-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        html {
          scroll-behavior: smooth;
        }
        .mask-image-gradient {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
      `}</style>
    </div>
  );
}

export default App;