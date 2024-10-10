// src/pages/Support.jsx
import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import SupportCenterMap from '../../components/SupportCenterMap';
import { Container as MapDiv } from 'react-naver-maps';
// import Kakao from './Map';

const Support = () => {
  return (
    <div>
      {/* <Kakao /> */}
      <MapDiv
        style={{
          width: '100%',
          height: '600px',
        }}
      >
        <SupportCenterMap />
      </MapDiv>
    </div>
  );
};

export default Support;
