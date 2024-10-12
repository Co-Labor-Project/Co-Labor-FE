import React, { useEffect, useState, useRef } from 'react';
import { NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import axios from 'axios';
import './SupportCenterMap.css';
import SupportCenterItem from './components/SupportCenterItem';
import styled from 'styled-components';
import ChooseMode from './components/ChooseMode';
import SidePage from './components/SidePage';
function SupportCenterMap() {
  const navermaps = useNavermaps();
  // console.log('navermaps 객체:', navermaps); // navermaps 객체 확인

  const mapRef = useRef(null);
  const [centers, setCenters] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);
  const [sortedCenters, setSortedCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [optionCenter, setOptionCenter] = useState(false); // false인 경우 지원센터

  //
  const [currentAddress, setCurrentAddress] = useState('서울특별시 강남구'); // 현재 위치의 주소
  //

  useEffect(() => {
    if (!navermaps) {
      console.log('navermaps 객체가 아직 로드되지 않았습니다.');
      return; // navermaps 객체가 로드될 때까지 대기
    }
    // 사용자의 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userPosition = { latitude, longitude };
        setCurrentPosition(userPosition);
        setMapCenter(new navermaps.LatLng(latitude, longitude));

        console.log(latitude, longitude);
        // Reverse Geocoding으로 구까지 지정
        reverseGeocode(latitude, longitude);
        //
      },
      (error) => {
        console.error('Error fetching current position:', error);
      }
    );
  }, [navermaps]);
  const reverseGeocode = (latitude, longitude) => {
    if (!navermaps) {
      console.error('navermaps 객체가 아직 로드되지 않았습니다.');
      return;
    }
    console.log('굳굳rnerne');

    const geocoder = new navermaps.Service.Geocoder(); // Geocoder 객체 생성
    console.log('굳굳');
    geocoder.reverseGeocode(
      {
        coords: new navermaps.LatLng(latitude, longitude),
      },
      (status, response) => {
        if (status === navermaps.Service.Status.OK) {
          const address = response.v2.address; // 행정 구역 정보
          const city = address.region.area1.name; // 예: 서울특별시
          const district = address.region.area2.name; // 예: 강남구
          const fullAddress = `${city} ${district}`;
          console.log(fullAddress);
          setCurrentAddress(fullAddress);
        } else {
          console.error('Error during reverse geocoding:', status);
        }
      }
    );
  };

  useEffect(() => {
    const url = optionCenter
      ? `/api/hospitals/region/${currentAddress}`
      : `/api/support-centers/all`;
    console.log('진입은함', currentAddress);
    axios
      .get(url)
      .then((response) => {
        setCenters(response.data);

        const sorted = [...response.data]
          .sort((a, b) => {
            return (
              getDistance(currentPosition, a) - getDistance(currentPosition, b)
            );
          })
          .slice(0, 50);
        setSelectedCenter(sorted[0]); // 선택된 센터가 처음에 병원 데이터로 업데이트되도록 설정
        setSortedCenters(sorted);

        if (sorted[0]) {
          setMapCenter(
            new navermaps.LatLng(sorted[0].latitude, sorted[0].longitude)
          );
        }
      })
      .catch((error) => {
        console.error('Error fetching support centers:', error);
      });
  }, [navermaps, optionCenter, currentPosition]);

  const getDistance = (pos1, pos2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(pos2.latitude - pos1.latitude);
    const dLon = toRad(pos2.longitude - pos1.longitude);
    const lat1 = toRad(pos1.latitude);
    const lat2 = toRad(pos2.latitude);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const handleCenterClick = (center) => {
    setSelectedCenter(center);
    setMapCenter(new navermaps.LatLng(center.latitude, center.longitude));
  };

  const IconImage = optionCenter
    ? {
        //병원 아이콘 제작자: mavadee - Flaticon
        content:
          '<img src="/assets/HospitalLocation.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 40px; height: 40px; left: 0px; top: 0px;">',
        size: new navermaps.Size(24, 24),
        origin: new navermaps.Point(0, 0),
        anchor: new navermaps.Point(12, 12),
      }
    : {
        //회사 아이콘 제작자: nawicon - Flaticon
        content:
          '<img src="/assets/BuildingLocation.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 40px; height: 40px; left: 0px; top: 0px;">',
        size: new navermaps.Size(24, 24),
        origin: new navermaps.Point(0, 0),
        anchor: new navermaps.Point(12, 12),
      };
  return (
    <div className="mapContainer">
      {mapCenter && (
        <NaverMap
          ref={mapRef}
          center={mapCenter}
          defaultZoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          {currentPosition && (
            <Marker
              position={
                new navermaps.LatLng(
                  currentPosition.latitude,
                  currentPosition.longitude
                )
              }
              title="현재 위치"
              clickable={true}
              icon={{
                //내 위치 아이콘 제작자: Creative Stall Premium - Flaticon
                content:
                  '<img src="/assets/currentLocation.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 40px; height: 40px; left: 0px; top: 0px;">',
                size: new navermaps.Size(48, 48),
                origin: new navermaps.Point(0, 0),
                anchor: new navermaps.Point(24, 24),
              }}
            />
          )}
          {centers.map((center) => (
            <Marker
              key={center.support_center_id}
              position={new navermaps.LatLng(center.latitude, center.longitude)}
              title={center.name}
              clickable={true}
              icon={IconImage}
              onClick={() => {
                handleCenterClick(center);
              }}
            />
          ))}
        </NaverMap>
      )}
      <SidePage
        selectedCenter={selectedCenter}
        optionCenter={optionCenter}
        sortedCenters={sortedCenters}
        handleCenterClick={handleCenterClick}
      />
      {/* <div className="sidePage">
        <div className="chooseCenter">
          <div className="selected">
            <div className="selectImg"></div>
            {selectedCenter && (
              <div className="selectedText">
                {' '}
                <p>
                  📌 <b>이름</b>: {selectedCenter.name}
                </p>
                <p>
                  🏢 <b>주소</b>: {selectedCenter.address}
                </p>
                <p>
                  📞 <b>전화번호</b>: {selectedCenter.phone}
                </p>
                {optionCenter && selectedCenter.hospitalInfo && (
                  <p>
                    🏥 <b>병원 정보</b>: {selectedCenter.hospitalInfo}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="nearCenterList">
          {sortedCenters.map((center, index) => (
            <div key={index} onClick={() => handleCenterClick(center)}>
              <SupportCenterItem
                name={center.name}
                address={center.address}
                phone={center.phone}
                hospitalInfo={optionCenter ? center.hospitalInfo : null} // 병원 정보 추가
              />
            </div>
          ))}
        </div>
      </div> */}

      <ChooseMode setOptionCenter={setOptionCenter} />
    </div>
  );
}

export default SupportCenterMap;
