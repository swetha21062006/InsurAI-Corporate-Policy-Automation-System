import React, { createContext, useState } from "react";

export const VoiceContext = createContext(null);

export function VoiceProvider({ children }) {
  const [isListening, setIsListening] = useState(false);
  return (
    <VoiceContext.Provider value={{ isListening, setIsListening }}>
      {children}
    </VoiceContext.Provider>
  );
}
