import React, { useState } from "react";
import "./chatAssistant.css"; // Create a CSS file for styling the chat popup

function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    // Here, you can handle sending the message to your backend or processing it in any way you need
    console.log("Sending message:", message);
    // Reset the message input after sending
    setMessage("");
  };

  return (
    <div className="chat-assistant">
      <button className="chat-button" onClick={toggleChat}>
        Chat
      </button>
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h4>Chat with Assistant</h4>
            <button className="close-button" onClick={toggleChat}>
              X
            </button>
          </div>
          <div className="chat-body">
            {/* Add your chat interface here */}
            <div className="message-container">
              {/* Render previous messages here if needed */}
            </div>
            <input
              className="chat-input"
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message..."
            />
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatAssistant;
