import { sendAudioChunk } from "./websocket.js";

let audioContext;
let analyser;
let microphone;
let frequencyData;
let processor;

export async function initAudio() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    microphone = audioContext.createMediaStreamSource(stream);

    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // Audio processor for chunking
    processor = audioContext.createScriptProcessor(4096, 1, 1);

    microphone.connect(analyser);
    analyser.connect(processor);
    processor.connect(audioContext.destination);

    processor.onaudioprocess = (event) => {
      const inputData = event.inputBuffer.getChannelData(0);

      // Convert Float32 → Int16
      const buffer = new ArrayBuffer(inputData.length * 2);
      const view = new DataView(buffer);

      let offset = 0;
      for (let i = 0; i < inputData.length; i++, offset += 2) {
        let sample = Math.max(-1, Math.min(1, inputData[i]));
        view.setInt16(offset, sample * 0x7fff, true);
      }

      sendAudioChunk(buffer);
    };

    console.log("🎙️ Audio streaming started");
    return true;
  } catch (err) {
    console.error("❌ Audio error:", err);
    return false;
  }
}

export function getFrequencyData() {
  analyser.getByteFrequencyData(frequencyData);
  return frequencyData;
}
