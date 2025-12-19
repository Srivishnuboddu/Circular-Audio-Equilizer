let socket;

/**
 * Connect to backend WebSocket
 */
export function initWebSocket() {
  socket = new WebSocket("ws://localhost:8080/ws/audio");

  socket.binaryType = "arraybuffer";

  socket.onopen = () => {
    console.log("🔌 WebSocket connected");
  };

 socket.onmessage = (event) => {
   // Backend transcription is simulated
   // We keep streaming but DO NOT show it on UI
   console.log("Backend (simulated):", event.data);
 };



  socket.onerror = (err) => {
    console.error("❌ WebSocket error:", err);
  };
}

/**
 * Send audio chunk to backend
 */
export function sendAudioChunk(chunk) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(chunk);
  }
}
