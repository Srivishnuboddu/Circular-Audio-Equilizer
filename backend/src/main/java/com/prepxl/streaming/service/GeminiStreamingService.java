package com.prepxl.streaming.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class GeminiStreamingService {

  private final WebClient webClient;

  public GeminiStreamingService() {
    this.webClient = WebClient.builder()
        .baseUrl("https://generativelanguage.googleapis.com")
        .build();
  }

  /**
   * Simulate streaming transcription (replace with real Gemini streaming)
   */
  public Mono<String> streamAudio(byte[] audioChunk) {

    //  IMPORTANT:
    // Gemini streaming audio-to-text is not publicly stable yet.
    // So we simulate partial transcription correctly.

    return Mono.just("Transcribed text chunk (simulated)");
  }
}
