import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Zap, Loader2, Save, Trash2, ChevronRight } from 'lucide-react';

const WorkoutGenerator: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [plan, setPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load persisted plan on mount
  useEffect(() => {
    const savedPlan = localStorage.getItem('samay_plan');
    if (savedPlan) setPlan(savedPlan);
  }, []);

  const generatePlan = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `User Goal: ${goal}. 
        Act as Samay, a high-energy, brutal, and extremely concise fitness coach. 
        Give a 3-exercise routine that takes exactly 30 minutes. 
        Format: Exercise Name (Sets/Reps) - Why you must do it.
        Style: Very short, punchy sentences. No "Hello", no "Hope this helps". Just the plan and a parting insult/motivation.`,
      });

      const text = response.text || "Coach Samay is silent. Try again.";
      setPlan(text);
      localStorage.setItem('samay_plan', text);
    } catch (err) {
      setError("Connection lost. Do more pushups and try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clearPlan = () => {
    localStorage.removeItem('samay_plan');
    setPlan(null);
    setGoal('');
  };

  return (
    <section id="generator" className="py-24 bg-black border-y border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-neutral-900 border-2 border-neutral-800 p-1 md:p-12 relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-yellow/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-neon-yellow flex items-center justify-center rounded-sm">
                <Zap className="text-black w-6 h-6 fill-black" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold uppercase text-white tracking-tighter">Instant Routine</h2>
                <p className="text-xs text-neon-yellow font-bold uppercase tracking-[0.2em]">Powered by Samay AI</p>
              </div>
            </div>

            <div className="space-y-6">
              {!plan ? (
                <div className="space-y-4">
                  <label className="block text-neutral-400 text-sm font-bold uppercase tracking-widest">What's your goal today?</label>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input 
                      type="text" 
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      placeholder="e.g. Build heavy chest, destroy body fat..."
                      className="flex-1 bg-black border border-neutral-800 p-4 text-white placeholder:text-neutral-700 focus:border-neon-yellow focus:outline-none transition-colors"
                      onKeyDown={(e) => e.key === 'Enter' && generatePlan()}
                    />
                    <button 
                      onClick={generatePlan}
                      disabled={loading || !goal.trim()}
                      className="bg-neon-yellow text-black px-8 py-4 font-display font-bold uppercase hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      {loading ? <Loader2 className="animate-spin" /> : "Get Orders"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="bg-black border-l-4 border-neon-yellow p-8 font-mono text-neutral-300">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] text-neutral-600 uppercase font-bold tracking-[0.3em]">Execution_Plan.sh</span>
                      <button onClick={clearPlan} className="text-neutral-600 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="whitespace-pre-line leading-relaxed">
                      {plan}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={() => window.print()}
                      className="flex-1 border border-neutral-700 py-3 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Save className="w-4 h-4" /> Print Plan
                    </button>
                    <button 
                      onClick={clearPlan}
                      className="flex-1 bg-neutral-800 py-3 text-sm font-bold uppercase tracking-widest hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
                    >
                      New Goal <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
              
              {error && <p className="text-red-500 text-sm font-bold italic">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutGenerator;