import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-tighter text-white">
          SAMAY<span className="text-neon-yellow">FIT</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-neon-yellow transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#join" className="bg-neon-yellow text-black px-6 py-2 font-display font-bold uppercase tracking-wider hover:bg-white transition-colors">
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-800 p-6 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-lg font-medium text-white hover:text-neon-yellow"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
             href="#join"
             onClick={() => setIsOpen(false)}
             className="bg-neon-yellow text-black text-center py-3 font-bold uppercase tracking-wider"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;