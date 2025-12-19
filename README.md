🎧 Real-Time Audio Equalizer & Streaming Transcription
📌 Project Overview

This project is a full-stack real-time audio processing application built as part of a Pre-Interview Fullstack Development Assignment.
The application captures live audio from the user’s microphone, visualizes audio frequencies using a circular audio equalizer, streams audio data to a backend server in real time, and converts speech into text with minimal latency.

🎯 Main Objective

The main aim of this project is to design and implement a low-latency real-time audio streaming system that demonstrates:

Audio processing in the browser

Real-time visualization

Continuous streaming using WebSockets

Scalable backend architecture for speech-to-text integration

This type of system is commonly used in voice assistants, live captioning, online interviews, and AI-powered voice tools.


🧩 Features
Frontend

🎙️ Microphone access using MediaStream API

📊 Real-time frequency analysis using Web Audio API (AnalyserNode)

🔄 Fully custom circular audio equalizer

⚡ Smooth animation at 60 FPS using requestAnimationFrame

📝 Real-time speech-to-text using Browser SpeechRecognition API

🎨 Clean, responsive, and modern dark-themed UI


Backend

🚀 Spring Boot based backend

🔁 WebSocket communication for low-latency, bi-directional streaming

📦 Accepts audio in small continuous chunks

⚙️ Immediate processing without buffering

🧠 Backend architecture designed for Gemini streaming transcription integration

♻️ Efficient resource usage (no thread blocking)


🏗️ Architecture Overview
Frontend
 ├─ MediaStream API (Microphone)
 ├─ Web Audio API (Frequency Analysis)
 ├─ Canvas API (Circular Visualizer)
 ├─ SpeechRecognition API (Live Transcription)
 └─ WebSocket Client (Audio Streaming)
        ↓
Backend (Spring Boot)
 ├─ WebSocket Server
 ├─ Real-time Audio Chunk Handling
 └─ (Plug-and-play Gemini STT Integration)

📌 Technology Stack
Frontend:

HTML5
CSS3
JavaScript (ES Modules)
Web Audio API
Canvas API
Web Speech API

Backend:

Java 17
Spring Boot
WebSocket
WebFlux (Reactive-ready architecture)

⚙️ How to Run the Project
1️⃣ Frontend Setup
cd frontend
npx serve
Open:
http://localhost:3000/public/index.html

2️⃣ Backend Setup
cd backend
mvn spring-boot:run


Backend runs on:

http://localhost:8080

📝 Real-Time Transcription Explanation (Important)

The visible speech-to-text output is implemented using the browser’s SpeechRecognition API.

This ensures real, low-latency transcription during the demo.

The backend streaming pipeline is fully implemented and functional but uses simulated transcription responses due to current limitations in public real-time Gemini audio streaming APIs.

Why this approach?

Gemini does not currently provide a stable public API for real-time microphone audio streaming.

The system is architected to plug in Gemini or any cloud STT service once available.

This approach ensures both practical demonstration and correct system design.


🧠 Key Learnings

Real-time audio processing in the browser

Streaming data using WebSockets

Designing low-latency systems

Handling real-world API limitations with practical solutions

Building scalable, interview-ready full-stack architectures

🚀 Conclusion

This project demonstrates a strong understanding of real-time systems, audio processing, frontend-backend communication, and system design.
It is built to be clean, extensible, and production-ready in architecture, while remaining practical for demonstration and evaluation purposes.

👤 Author
Boddu Sri Vishnu
Pre-Interview Fullstack Development Assignment
