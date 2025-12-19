import React from 'react';

const steps = [
  {
    title: "Connect",
    desc: "Sync with Samay AI. Tell him your goals. Don't lie, he knows."
  },
  {
    title: "Execute",
    desc: "Get your personalized plan. Follow the reps. Respect the recovery."
  },
  {
    title: "Conquer",
    desc: "Track progress. Break plateaus. Get yelled at nicely if you slack."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2">
             <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-none mb-8">
               How It <br /><span className="text-neutral-700">Works</span>
             </h2>
             <img 
               src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
               alt="Training" 
               className="w-full h-96 object-cover grayscale opacity-80 border-2 border-neutral-800"
             />
          </div>

          <div className="w-full md:w-1/2 space-y-12 pl-0 md:pl-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-12 border-l border-neutral-800 hover:border-neon-yellow transition-colors duration-300">
                <span className="absolute -left-[17px] top-0 flex items-center justify-center w-8 h-8 bg-neutral-900 border border-neutral-700 rounded-full text-neon-yellow font-display font-bold">
                  {idx + 1}
                </span>
                <h3 className="text-3xl font-display font-bold uppercase mb-2">{step.title}</h3>
                <p className="text-gray-400 text-lg">{step.desc}</p>
              </div>
            ))}
            
            <div className="pt-8">
               <button className="text-neon-yellow uppercase font-bold tracking-widest border-b border-neon-yellow hover:text-white hover:border-white transition-colors pb-1">
                 View Sample Plan
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;