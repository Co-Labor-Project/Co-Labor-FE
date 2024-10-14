import React from 'react';
import styled from 'styled-components';
const Contact = () => {
  return (
    <BaseContainer>
      <Dohyun />
      <JunHwa />
      <Dohyun />
      <Dohyun />
    </BaseContainer>
  );
};

export default Contact;

const Dohyun = () => (
  <ContentContainer>
    <Photo $src={'/assets/profile.jpg'}></Photo>
    <TextWrapper>
      <Name>김도현</Name>
      <Role>프론트엔드</Role>
    </TextWrapper>
    <ContactWrapper>
      <a href="https://github.com/kdhqwe1030">
        <img src="https://skillicons.dev/icons?i=github&theme=light" />
      </a>
      <a href="mailto:kdhqwe1030@gmail.com">
        <img src="https://skillicons.dev/icons?i=gmail&theme=light" />
      </a>
      <a href="https://instagram.com/no_dohyun">
        <img src="https://skillicons.dev/icons?i=instagram" />
      </a>
    </ContactWrapper>
  </ContentContainer>
);
const JunHwa = () => (
  <ContentContainer>
    <Photo $src={'/assets/profile.jpg'}></Photo>
    <TextWrapper>
      <Name>조준화</Name>
      <Role>백엔드 / 머신러닝 엔지니어</Role>
    </TextWrapper>
    <ContactWrapper>
      <a href="https://github.com/jjj5306">
        <img src="https://skillicons.dev/icons?i=github&theme=light" />
      </a>
      <a href="mailto:jjj5306@naver.com">
        <img src="https://skillicons.dev/icons?i=gmail&theme=light" />
      </a>
      <a href="https://instagram.com/no_dohyun">
        <img src="https://skillicons.dev/icons?i=instagram" />
      </a>
    </ContactWrapper>
  </ContentContainer>
);
const HanUl = () => (
  <ContentContainer>
    <Photo $src={'/assets/profile.jpg'}></Photo>
    <TextWrapper>
      <Name>정한울</Name>
      <Role>백엔드</Role>
    </TextWrapper>
    <ContactWrapper>
      <a href="https://github.com/jho7535">
        <img src="https://skillicons.dev/icons?i=github&theme=light" />
      </a>
      <a href="mailto:jho7535@naver.com">
        <img src="https://skillicons.dev/icons?i=gmail&theme=light" />
      </a>
      <a href="https://instagram.com/no_dohyun">
        <img src="https://skillicons.dev/icons?i=instagram" />
      </a>
    </ContactWrapper>
  </ContentContainer>
);
const MoonKi = () => (
  <ContentContainer>
    <Photo $src={'/assets/profile.jpg'}></Photo>
    <TextWrapper>
      <Name>김문기</Name>
      <Role>백엔드</Role>
    </TextWrapper>
    <ContactWrapper>
      <a href="https://github.com/mk-isos">
        <img src="https://skillicons.dev/icons?i=github&theme=light" />
      </a>
      <a href="mailto:mkisos0316@gmail.com">
        <img src="https://skillicons.dev/icons?i=gmail&theme=light" />
      </a>
      <a href="https://www.instagram.com/mk_isos">
        <img src="https://skillicons.dev/icons?i=instagram" />
      </a>
    </ContactWrapper>
  </ContentContainer>
);
const BaseContainer = styled.div`
  width: 100%;
  height: calc(100vh - 81px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  background-color: #191f28;
`;

const ContentContainer = styled.div`
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 30px 30px;
`;
const Photo = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: white;
  background-image: ${({ $src }) => `url(${$src})`};
  background-size: cover;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: white;
  width: 100%;
  text-align: center;
`;
const Role = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  width: 100%;
  text-align: center;
`;
const TextWrapper = styled.div``;
const ContactWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
