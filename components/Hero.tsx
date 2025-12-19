import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-block border-l-4 border-neon-yellow pl-4">
              <p className="text-neon-yellow font-bold tracking-widest uppercase text-sm">
                AI Fitness Coach
              </p>
            </div>
            
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] text-white uppercase">
              Train <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Every</span> <br />
              <span className="text-neon-yellow">Day.</span>
            </h1>
            
            <p className="text-gray-300 text-lg max-w-md font-light leading-relaxed">
              Stop planning, start doing. Personalized fitness delivered with maximum energy and minimal time wasted. Zero fluff.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#join" className="group bg-neon-yellow text-black px-8 py-4 font-display font-bold text-xl uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-all">
                Start Now
                <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#philosophy" className="px-8 py-4 border border-white text-white font-display font-bold text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                The Philosophy
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4 text-sm text-gray-400">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://picsum.photos/id/${i + 50}/100/100`} className="w-8 h-8 rounded-full border-2 border-black" alt="Member" />
                 ))}
               </div>
               <p>12k+ Members crushing it</p>
            </div>
          </div>

          {/* Samay Character Image (Right Side) */}
          <div className="hidden md:block relative h-full min-h-[600px] flex items-end justify-center">
             {/* This is a placeholder for Samay Raina's image based on the prompt description */}
             <div className="relative z-10 w-full max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800"
                  alt="Samay Raina Coach" 
                  className="w-full h-auto object-contain drop-shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700 mask-image-gradient"
                  style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                />
                <div className="absolute bottom-10 -left-10 bg-neutral-900/90 backdrop-blur border border-neon-yellow/30 p-4 rounded-sm">
                   <p className="text-neon-yellow font-display font-bold text-xl">COACH SAMAY</p>
                   <p className="text-white text-xs uppercase tracking-widest">Always Watching.</p>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;