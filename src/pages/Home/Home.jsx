import React, { useState, useEffect, useCallback } from 'react';
import MainIntroduce from './components/MainIntroduce';
import MainTitle from './components/MainTitle';
import styled from 'styled-components';
import JobInfo from './components/JobInfo';
import LegalChatInfo from './components/LegalChatInfo';
import MapInfo from './components/MapInfo';
import Contact from './components/Contact';

const Home = () => {
  const [page, setPage] = useState(0);
  const lastPage = 5; // 컨테이너 개수
  const [isThrottled, setIsThrottled] = useState(false); // 스로틀 상태

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(
    (e) => {
      e.preventDefault();
      if (!isThrottled) {
        if (e.deltaY > 0 && page < lastPage) {
          setPage((prevPage) => Math.min(prevPage + 1, lastPage));
        } else if (e.deltaY < 0 && page > 0) {
          setPage((prevPage) => Math.max(prevPage - 1, 0));
        }

        // 스로틀 상태를 true로 설정하고 1초 후에 다시 false로 변경
        setIsThrottled(true);
        setTimeout(() => {
          setIsThrottled(false);
        }, 1000);
      }
    },
    [page, lastPage, isThrottled]
  );

  // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Basefiled>
      <Wrap $page={page} $lastPage={lastPage}>
        <Container>
          <MainTitle />
        </Container>
        <Container>
          <MainIntroduce />
        </Container>
        <Container>
          <JobInfo />
        </Container>
        <Container>
          <LegalChatInfo />
        </Container>
        <Container>
          <MapInfo />
        </Container>
        <Container>
          <Contact />
        </Container>
      </Wrap>
    </Basefiled>
  );
};

export default Home;

const Basefiled = styled.div`
  width: 100vw;
  padding: 0;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrap = styled.div`
  position: relative;
  top: ${({ $page }) => `-${$page * 100}vh`}; /* 페이지에 따라 위치 변경 */
  transition: top 1s ease-in-out;
  display: flex;
  flex-direction: column;
  height: ${($lastPage) => `${$lastPage * 100}vh`}; /* 페이지에 따른 높이 설정*/
`;
