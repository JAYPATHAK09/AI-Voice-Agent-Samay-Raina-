import React, { useState } from 'react';
import { PhoneOff, Mic } from 'lucide-react';

const VoiceAgent: React.FC = () => {
  const [sessionKey, setSessionKey] = useState(0);

  const handleEndCall = () => {
    setSessionKey(prev => prev + 1);
  };

  const ConvaiWidget = 'elevenlabs-convai' as any;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group">
      {/* Tooltip hint */}
      <div className="bg-black border border-neutral-800 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity mb-1">
        Speak with Samay
      </div>

      <div className="relative">
        {/* Pulse effect under widget */}
        <div className="absolute inset-0 bg-neon-yellow/20 rounded-full animate-ping pointer-events-none" />
        <div className="relative bg-black rounded-full overflow-hidden border border-neutral-800 shadow-2xl">
          <ConvaiWidget 
            key={sessionKey} 
            agent-id="agent_7001kcdjjnv7fqzazjzchcz8ph5j"
          ></ConvaiWidget>
        </div>
      </div>

      {/* End Call Button */}
      <button 
        onClick={handleEndCall}
        className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-500 text-[10px] font-display font-bold uppercase tracking-widest hover:border-red-600 hover:text-red-500 hover:bg-red-500/5 transition-all duration-300 shadow-2xl group/btn"
        title="Disconnect and reset session"
      >
        <PhoneOff className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
        Emergency Stop
      </button>
    </div>
  );
};

export default VoiceAgent;