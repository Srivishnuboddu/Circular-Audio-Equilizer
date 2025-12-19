import { initAudio } from "./js/audio.js";
import { initVisualizer } from "./js/visualizer.js";
import { initWebSocket } from "./js/websocket.js";
import { startSpeechRecognition } from "./js/transcription.js";

const startButton = document.getElementById("startBtn");



startButton.addEventListener("click", async () => {
  initWebSocket();

  const success = await initAudio();

  if (success) {
    initVisualizer();
    startButton.disabled = true;
    startButton.innerText = text;
  }
});
const box = document.getElementById("transcriptionBox");

startSpeechRecognition((text) => {
  box.innerText = text;
});

document.querySelector(".mic-text").innerText = "Listening… Speak now";
