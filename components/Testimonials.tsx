import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white uppercase">
            Real Results. <span className="text-neon-yellow">No Drama.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-black p-8 border-t-4 border-neutral-800 hover:border-neon-yellow transition-all duration-300">
              <Quote className="text-neutral-700 mb-6 w-10 h-10" />
              <p className="text-white text-lg font-light italic mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center font-bold text-neon-yellow">
                   {t.author.charAt(0)}
                </div>
                <div>
                   <p className="font-display font-bold text-white uppercase tracking-wide text-sm">{t.author}</p>
                   <p className="text-xs text-neutral-500 uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;