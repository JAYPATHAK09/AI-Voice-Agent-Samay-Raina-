import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 border-l-4 border-neon-yellow pl-4">
              <Zap className="w-4 h-4 text-neon-yellow fill-neon-yellow animate-pulse" />
              <p className="text-neon-yellow font-bold tracking-widest uppercase text-sm">
                AI Coaching Protocol 2.0
              </p>
            </div>
            
            <h1 className="font-display font-bold text-6xl md:text-9xl leading-[0.85] text-white uppercase tracking-tighter">
              Train <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">Every</span> <br />
              <span className="text-neon-yellow">Day.</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-md font-light leading-relaxed">
              Stop planning, start doing. Personalized fitness delivered with Samay's energy. Minimal time, maximum brutality.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#generator" className="group bg-neon-yellow text-black px-10 py-5 font-display font-bold text-xl uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-all transform active:scale-95">
                Generate Plan
                <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#philosophy" className="px-10 py-5 border border-white/20 text-white font-display font-bold text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                The Logic
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-8 text-sm text-neutral-500 border-t border-neutral-800/50">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/150?img=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-black" alt="Member" />
                 ))}
               </div>
               <p className="font-medium italic">Join 12,482 warriors crushing their plateaus.</p>
            </div>
          </div>

          {/* Samay Character Image (Right Side) */}
          <div className="hidden lg:flex relative h-full min-h-[650px] items-end justify-center animate-in fade-in zoom-in duration-1000 delay-200">
             <div className="relative z-10 w-full max-w-lg">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800"
                  alt="Samay Raina Coach" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(223,255,0,0.1)] grayscale contrast-125 hover:grayscale-0 transition-all duration-700 mask-image-gradient cursor-crosshair"
                />
                <div className="absolute bottom-16 -left-8 bg-black/80 backdrop-blur-xl border-l-4 border-neon-yellow p-6 rounded-sm shadow-2xl">
                   <p className="text-neon-yellow font-display font-bold text-3xl italic tracking-tighter">COACH SAMAY</p>
                   <p className="text-neutral-500 text-xs uppercase font-bold tracking-[0.3em] mt-1">Status: Active & Watching</p>
                </div>
                
                {/* Visual pulses */}
                <div className="absolute top-1/4 right-0 w-32 h-32 bg-neon-yellow/10 rounded-full blur-2xl animate-pulse" />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;