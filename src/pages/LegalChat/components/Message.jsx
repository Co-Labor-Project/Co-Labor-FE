import '../IegalAdviceCenter.css';

export const MessageList = ({ messages, loading, isSending }) => (
  <div className="messages-list">
    {loading ? (
      <div className="LoadingWrapper">
        <div className="loading-spinner"></div>
        <p>🤖 이전 채팅 기록을 불러오는 중 입니다...</p>
      </div>
    ) : (
      <>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
        {/* <p>Sending...</p> */}
        {isSending && (
          <div className="LoadingWrapper">
            <div className="loading-spinner"></div>

            <p>🤖 답변을 생성 중 입니다...</p>
          </div>
        )}
      </>
    )}
  </div>
);

// 메시지 컴포넌트
export const Message = ({ text, isUser }) => {
  return (
    <div>
      <div className={isUser ? 'user-message' : 'ai-message'}>
        <b className="messageWrapper">{isUser ? '' : 'Co Labor :'}</b>
        <div
          className="messageWrapper2"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};
