import React, { useState, useEffect } from "react";
import "./css/IegalAdviceCenter.css";
import { useNavigate } from "react-router-dom";

const IegalAdviceCenter = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 현재 로그인된 사용자 가져오기
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate("/SingIn");
      alert("You need to log in to use this feature.");
    }
  }, [navigate]);

  // 메시지 목록 불러오기
  const fetchMessages = (userId) => {
    setLoading(true);
    fetch(`http://localhost:8080/api/chatting/all?userId=${userId}`, {
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(
          data.map((msg) => ({
            text: msg.content,
            isUser: msg.my_message,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
        alert("Failed to load the message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // 메시지 전송 핸들러
  const handleSendMessage = (message) => {
    if (!username) {
      console.error("User not logged in");
      return;
    }

    // 사용자가 보낸 메시지를 추가
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
    ]);

    setLoading(true);
    fetch(
      `http://localhost:8080/api/chatting/send?userId=${username}&message=${encodeURIComponent(
        message
      )}`,
      {
        method: "POST",
        credentials: "include",
      }
    )
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        fetchMessages(username);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send the message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (username) {
      fetchMessages(username);
    }
  }, [username]);

  return (
    <div className="app">
      <div className="chat-box">
        <h1>CoLaw</h1>
        <MessageList messages={messages} loading={loading} />
        <MessageForm onSendMessage={handleSendMessage} loading={loading} />
        {loading && <LoadingIndicator />}
      </div>
    </div>
  );
};

// 메시지 목록 컴포넌트
const MessageList = ({ messages, loading }) => (
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
const MessageForm = ({ onSendMessage, loading }) => {
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
        disabled={loading} // 로딩 중일 때 입력 비활성화
      />
      <button type="submit" className="send-button" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default IegalAdviceCenter;
