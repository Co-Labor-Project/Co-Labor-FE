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
      alert("이 기능을 사용하려면 로그인이 필요합니다.");
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
        alert("메시지를 불러오지 못했습니다. 다시 시도해 주세요.");
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
        alert("메시지를 전송하지 못했습니다. 다시 시도해 주세요.");
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

        <h1 className="chatTitle">CoLaw</h1>
        <MessageList messages={messages} loading={loading} />
        <MessageForm onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

// 메시지 목록 컴포넌트
const MessageList = ({ messages, loading }) => (
  <div className="messages-list">
    {loading ? (
      <p>Loading...</p>
    ) : (
      messages.map((message, index) => <Message key={index} {...message} />)
    )}
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
