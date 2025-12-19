import React, { useState } from 'react';
import { PhoneOff } from 'lucide-react';

const VoiceAgent: React.FC = () => {
  // Changing the key forces the component to re-mount, effectively ending any active call.
  const [sessionKey, setSessionKey] = useState(0);

  const handleEndCall = () => {
    setSessionKey(prev => prev + 1);
  };

  // Use a variable for the custom element to bypass TypeScript's IntrinsicElements check
  // which avoids the need for global namespace augmentation that was breaking standard elements.
  const ConvaiWidget = 'elevenlabs-convai' as any;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Voice Widget */}
      <div className="relative">
        <ConvaiWidget 
          key={sessionKey} 
          agent-id="agent_7001kcdjjnv7fqzazjzchcz8ph5j"
        ></ConvaiWidget>
      </div>

      {/* End Call Button */}
      <button 
        onClick={handleEndCall}
        className="group flex items-center gap-2 px-3 py-2 bg-black/90 backdrop-blur-sm border border-neutral-800 rounded-full text-neutral-400 text-[10px] font-display font-bold uppercase tracking-widest hover:border-red-600 hover:text-red-500 transition-all duration-300 shadow-xl"
        title="Disconnect and reset session"
      >
        <PhoneOff className="w-3 h-3 group-hover:scale-110 transition-transform" />
        End Call
      </button>
    </div>
  );
};

export default VoiceAgent;