package com.prepxl.streaming.handler;

import com.prepxl.streaming.service.GeminiStreamingService;
import org.springframework.web.socket.BinaryMessage;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.BinaryWebSocketHandler;

import java.nio.ByteBuffer;

public class AudioWebSocketHandler extends BinaryWebSocketHandler {

  private final GeminiStreamingService geminiService = new GeminiStreamingService();

  @Override
  protected void handleBinaryMessage(WebSocketSession session, BinaryMessage message)
      throws Exception {

    ByteBuffer buffer = message.getPayload();
    byte[] audioChunk = new byte[buffer.remaining()];
    buffer.get(audioChunk);

    geminiService.streamAudio(audioChunk)
        .subscribe(text -> {
          try {
            session.sendMessage(new TextMessage(text));
          } catch (Exception e) {
            e.printStackTrace();
          }
        });
  }
}
