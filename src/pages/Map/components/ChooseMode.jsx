import React from 'react';
import styled from 'styled-components';
const ChooseMode = ({ setOptionCenter }) => {
  return (
    <BaseContainer>
      <Button
        onClick={() => {
          setOptionCenter(false);
        }}
      >
        🏬 지원센터
      </Button>
      <Button
        onClick={() => {
          setOptionCenter(true);
        }}
      >
        🏥 병원
      </Button>
    </BaseContainer>
  );
};

export default ChooseMode;
const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  right: 40vw;
  top: 10px;
`;

const Button = styled.div`
  text-align: center;
  padding: 10px 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 5px solid rgb(170, 236, 185);
  border-radius: 5px;
  transition: all 0.5s;

  &:hover {
    border: 6px solid rgb(86, 229, 119);
    font-size: 16px;
    transform: scale(1.2);
  }
`;
