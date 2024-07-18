import React, { useState, useEffect } from "react";
import "./css/IegalAdviceCenter.css";

const IegalAdviceCenter = () => {
  const [messages, setMessages] = useState([]);

  // 메시지 전송 핸들러
  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
      {
        text: `Your message is: "${message}"`,
        isUser: false,
      },
    ]);
  };

  return (
    <div className="app">
      <div className="chat-box">
        <h1 className="chatTitle">CoLaw</h1>
        <MessageList messages={messages} />
        <MessageForm onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

// 메시지 목록 컴포넌트
const MessageList = ({ messages }) => (
  <div className="messages-list">
    {messages.map((message, index) => (
      <Message key={index} {...message} />
    ))}
  </div>
);

// 메시지 컴포넌트
const Message = ({ text, isUser }) => {
  return (
    <div className={isUser ? "user-message" : "ai-message"}>
      <p>
        <b>{isUser ? "" : "Co Labor :"}</b> {text}
      </p>
    </div>
  );
};

// 메시지 전송 폼 컴포넌트
const MessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="message-input"
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  );
};

export default IegalAdviceCenter;
