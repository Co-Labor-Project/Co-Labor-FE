import { useState } from 'react';
import {
  LoadingText,
  LoadingSpinner,
  LoadingWrapper,
} from '../../../component/CommonStyled';
import styled from 'styled-components';

const InitalMessage = ({ messages, loading, isSending, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isSending) {
      // 메시지 전송 중에는 중복 전송 방지
      onSendMessage(message);
      setMessage('');
    }
  };
  return (
    <BaseContainer onSubmit={handleSubmit}>
      {loading ? (
        <LoadingWrapper>
          <LoadingSpinner />
          <LoadingText>🤖 이전 채팅 기록을 불러오는 중 입니다...</LoadingText>
        </LoadingWrapper>
      ) : (
        <Container>
          <MainText>무엇을 도와드릴까요?</MainText>
          <InputWrapper>
            <InputPrompt
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              disabled={isSending} // 전송 중일 때 입력 비활성화
            ></InputPrompt>
            <SendButton type="submit" disabled={isSending}>
              {isSending ? 'Sending...' : '→'} {/* 전송 중 상태 표시 */}
            </SendButton>
          </InputWrapper>
        </Container>
      )}
    </BaseContainer>
  );
};

export default InitalMessage;
const BaseContainer = styled.div`
  height: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 90%;
  padding: 0px 40px;
  gap: 30px;
`;
const InputPrompt = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 16px;
  border: 0px solid var(--primary-color);

  background-color: #f7f7f5;
  position: relative;
  height: 70px;
  font-size: 18px;
  font-weight: 400;

  transition: all 0.3ms ease-in-out;
  &:focus {
    outline: none;
    border: 2px solid var(--primary-color);
  }
`;
const SendButton = styled.button`
  padding: 10px 30px;
  border-radius: 16px;
  border: none;
  background-color: var(--primary-color);
  color: #fff;
  cursor: pointer;
  font-size: 22px;
`;

const MainText = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 100%;
`;
