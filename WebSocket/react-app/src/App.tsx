import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [inputValue, setInputValue] = useState(""); // State for input value

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");

    newSocket.onopen = () => {
      console.log("Connected");
      setSocket(newSocket);
    };

    newSocket.onmessage = (message) => {
      console.log("Received Message", message.data);
      setLatestMessage(message.data);
    };

    return () => {
      newSocket.close();
    };
  }, []);

  // Function to handle sending a message
  const sendMessage = () => {
    if (socket && inputValue.trim() !== "") {
      socket.send(inputValue);
      setInputValue(""); // Clear the input after sending
    }
  };

  if (!socket) {
    return <>loading ...</>;
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        <h2>Latest Message:</h2>
        <p>{latestMessage}</p>
      </div>
    </>
  );
}

export default App;
