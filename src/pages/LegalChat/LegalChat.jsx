import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageSend from './components/MessageSend';
import { MessageList } from './components/Message';
import styled from 'styled-components';
const LegalChat = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSending, setIsSending] = useState(false); // 메시지 전송 중 상태 추가
  const navigate = useNavigate();

  // 현재 로그인된 사용자 가져오기
  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate('/SingIn');
      alert('이 기능을 사용하려면 로그인이 필요합니다.');
    }
  }, [navigate]);

  // 메시지 목록 불러오기
  const fetchMessages = (userId) => {
    setLoading(true);
    fetch(`/api/chatting/all?userId=${userId}`, {
      credentials: 'include',
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error('Unauthorized');
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
        console.error('Error fetching messages:', error);
        alert('메시지를 불러오지 못했습니다. 다시 시도해 주세요.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // 메시지 전송 핸들러
  const handleSendMessage = (message) => {
    if (!username) {
      console.error('User not logged in');
      return;
    }

    setIsSending(true); // 메시지 전송 시작 시 로딩 상태로 변경

    // 사용자가 보낸 메시지를 추가
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
    ]);

    fetch(
      `/api/chatting/send?userId=${username}&message=${encodeURIComponent(
        message
      )}`,
      {
        method: 'POST',
        credentials: 'include',
      }
    )
      .then((response) => {
        if (response.status === 401) {
          throw new Error('Unauthorized');
        }
        fetchMessages(username);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('메시지를 전송하지 못했습니다. 다시 시도해 주세요.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  useEffect(() => {
    if (username) {
      fetchMessages(username);
    }
  }, [username]);

  return (
    <Field>
      <BaseContainer>
        <MessageList
          messages={messages}
          loading={loading}
          isSending={isSending}
        />
        initial message
        <MessageSend onSendMessage={handleSendMessage} isSending={isSending} />
      </BaseContainer>
    </Field>
  );
};

export default LegalChat;

const Field = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: #fff;
`;
const BaseContainer = styled.div`
  width: 1000px;
  height: 100%;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
