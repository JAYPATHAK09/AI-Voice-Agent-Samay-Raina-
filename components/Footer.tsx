import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="join" className="bg-neon-yellow text-black pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-6xl md:text-9xl font-display font-bold uppercase leading-none mb-8 tracking-tighter">
            Don't Wait.
          </h2>
          <p className="text-xl font-medium max-w-xl mb-10">
            Tomorrow is the enemy of today. Join the community that stops planning and starts sweating.
          </p>
          <button className="bg-black text-white px-12 py-5 font-display font-bold text-2xl uppercase tracking-widest hover:scale-105 transition-transform">
            Start Now
          </button>
        </div>

        <div className="border-t border-black/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-semibold uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} SamayFit AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:opacity-70">Privacy</a>
             <a href="#" className="hover:opacity-70">Terms</a>
             <a href="#" className="hover:opacity-70">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;