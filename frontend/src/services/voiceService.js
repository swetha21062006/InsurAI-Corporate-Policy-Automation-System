import api from "./api";

export async function sendVoiceAudio(formData) {
  const res = await api.post("/voice/stt", formData);
  return res.data;
}

export async function fetchTTS(text) {
  const res = await api.post("/voice/tts", { text });
  return res.data;
}
