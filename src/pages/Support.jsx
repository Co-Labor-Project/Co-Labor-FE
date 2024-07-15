// src/pages/Support.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SupportCenterMap from '../components/SupportCenterMap';
import { Container as MapDiv } from 'react-naver-maps';

const Support = () => {
  return (
    <div>
      <Header />
      <h1>지원 페이지</h1>
      <MapDiv
        style={{
          width: '93%',
          height: '600px',
        }}
      >
        <SupportCenterMap />
      </MapDiv>
      <Footer />
    </div>
  );
};

export default Support;
