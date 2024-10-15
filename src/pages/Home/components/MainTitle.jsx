import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FadeInContainer } from '../../../components/FadeIn';
import MainBackground from '../../../assets/mainBackground.jpg';

const MainTitle = () => {
  const [webTitle, setWebTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = 'Co Labor';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setWebTitle((prevTitleValue) => {
        if (count >= completionWord.length) {
          clearInterval(typingInterval);
          return prevTitleValue;
        }

        return prevTitleValue + completionWord[count];
      });

      setCount((prevCount) => prevCount + 1);
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count, completionWord]);

  return (
    <Background>
      <Blu />
      <BaseContainer>
        <TitleText>{webTitle}</TitleText>
        <FadeInContainer>
          <SubText>외국인 근로자의 든든한 파트너</SubText>
        </FadeInContainer>
      </BaseContainer>
    </Background>
  );
};

export default MainTitle;

const Background = styled.div`
  width: 100%;
  height: calc(100vh - 81px);
  position: relative;
  background-image: url(${MainBackground}); //FREEPIK- tawatchai07
  background-size: cover;
  pointer-events: none;
`;

const Blu = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 0;
  pointer-events: none;
`;

const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const TitleText = styled.h1`
  font-size: 12vh;
  font-weight: 400;
  position: relative;
  display: inline-block;

  &::after {
    content: '|';
    font-weight: normal;
    margin-left: 5px;
    animation: ${blink} 1s steps(1) 6;
    animation-fill-mode: forwards;
  }
`;

const SubText = styled.div`
  font-size: 5vh;
  font-weight: bold;
  margin-top: 1rem;
`;
// 일자리, 법률, 정보 제공까지, 한국에서의 안정적인 정착을 위한 모든 솔루션을 한 곳에서 만나보세요.
const TextWrapper = styled.div``;
