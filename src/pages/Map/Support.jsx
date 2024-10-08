// src/pages/Support.jsx
import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import SupportCenterMap from '../../components/SupportCenterMap';
import { Container as MapDiv } from 'react-naver-maps';

const Support = () => {
  return (
    <div>
      <MapDiv
        style={{
          width: '100%',
          height: '600px',
        }}
      >
        <SupportCenterMap />
      </MapDiv>
      <div className="gap"></div>
    </div>
  );
};

export default Support;
