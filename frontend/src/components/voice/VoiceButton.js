import React from "react";

function VoiceButton({ onClick }) {
  return (
    <button className="voice-button" onClick={onClick}>
      🎤
    </button>
  );
}

export default VoiceButton;
