import { useContext } from "react";
import { VoiceContext } from "../context/VoiceContext";

export default function useVoiceAssistant() {
  return useContext(VoiceContext);
}
