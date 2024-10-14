import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../../hooks/fade_in';

const MapInfo = () => {
  return (
    <BaseContainer>
      <ContentWrapper>
        <LeftContainer>
          <MainContainer />
          <SubContainer />
        </LeftContainer>
        <RightContainer>
          <Example />
        </RightContainer>
      </ContentWrapper>
    </BaseContainer>
  );
};

export default MapInfo;
const BaseContainer = styled.div`
  width: 100%;
  height: calc(100vh - 81px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainContainer = () => {
  const fadeInProps = useScrollFadeIn('right', 1.5);
  return (
    <div {...fadeInProps}>
      <MainTextWrap>
        <MainText>지원 센터 및 병원 지도 서비스</MainText>
        <div>
          <MainSideText>가까운 지원 센터와 병원을 손쉽게 찾기</MainSideText>
          <MainSideText>위치 기반 지도 서비스 제공</MainSideText>
        </div>
      </MainTextWrap>
    </div>
  );
};
const MainTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MainText = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #148d7f;
`;
const MainSideText = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #191f28;
`;
const SubContainer = () => {
  const fadeInProps = useScrollFadeIn('right', 3);

  return (
    <div {...fadeInProps}>
      <SubTextWrap>
        <SubText>
          내 주변에 있는 외국인 근로자 지원 센터와 병원을 지도로 쉽게
          확인하세요.
        </SubText>
        <SubText>
          {' '}
          필요한 도움을 받을 수 있는 기관을 빠르게 찾아가세요.{' '}
        </SubText>
      </SubTextWrap>
    </div>
  );
};

const SubText = styled.div`
  color: rgb(107, 118, 132);
`;

const SubTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Example = () => {
  const fadeInProps = useScrollFadeIn('left', 2);

  return (
    <div {...fadeInProps}>
      <ExampleContainer></ExampleContainer>
    </div>
  );
};

const ExampleContainer = styled.div`
  width: 40vw;
  height: 40vh;
  border-radius: 25px;
  border: 3px solid #333;
  box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.2);
`;
