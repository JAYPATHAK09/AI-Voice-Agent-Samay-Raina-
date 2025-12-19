import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
           <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-4">
             The Samay <span className="text-neon-yellow">Protocol</span>
           </h2>
           <p className="text-gray-400 max-w-2xl text-lg">
             We don't do guesswork. We use proven principles to get you from point A to point Beast Mode.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-neutral-900 border border-neutral-800 p-8 hover:border-neon-yellow transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <span className="text-neon-yellow font-display text-4xl font-bold">0{index + 1}</span>
              </div>
              
              <div className="mb-6 bg-neon-yellow inline-flex p-3 rounded-sm">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 group-hover:text-neon-yellow transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;