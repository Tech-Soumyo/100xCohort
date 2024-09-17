import React, { useState, useEffect } from "react";

export function WebSocketComponent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("wss://example.com/socket");

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socket.onopen = () => console.log("WebSocket connection opened");
    socket.onclose = () => console.log("WebSocket connection closed");

    return () => {
      console.log("Closing WebSocket");
      socket.close(); // Clean up WebSocket connection on unmount
    };
  }, []); // Empty array - set up WebSocket on mount, clean up on unmount

  return (
    <div>
      <h2>WebSocket Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
