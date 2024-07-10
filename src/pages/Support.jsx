import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from 'react-naver-maps';

function MyMap() {
  // instead of window.naver.maps
  const navermaps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(36.632473380701, 127.45314301376)}
      defaultZoom={15}
    >
      <Marker defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)} />
      <Marker
        defaultPosition={new navermaps.LatLng(36.632473380701, 127.45314301376)}
      />
    </NaverMap>
  );
}

const Support = () => {
  return (
    <div>
      <Header />
      <h1>지원 페이지</h1>
      <MapDiv
        style={{
          width: '600px ',
          height: '600px',
        }}
      >
        <MyMap />
      </MapDiv>
      <Footer />
    </div>
  );
};

export default Support;
