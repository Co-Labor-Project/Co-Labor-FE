import React, { useEffect, useState, useRef } from 'react';
import { NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import axios from 'axios';
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
  const [click, setClick] = useState(false); //지원센터 버그 check
  const [currentAddress, setCurrentAddress] = useState({
    latitude: '',
    longitude: '',
  }); // 현재 위치의 주소

  useEffect(() => {
    if (!navermaps) {
      console.log('navermaps 객체가 아직 로드되지 않았습니다.');
      return; // navermaps 객체가 로드될 때까지 대기
    }
    // 사용자의 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userPosition = { latitude: latitude, longitude: longitude };
        setCurrentAddress([latitude, longitude]);
        setCurrentPosition(userPosition);
        setMapCenter(new navermaps.LatLng(latitude, longitude));
      },
      (error) => {
        console.error('Error fetching current position:', error);
      }
    );
  }, [navermaps]);

  // useEffect(() => {
  //   const url = optionCenter
  //     ? `/api/hospitals/nearby?latitude=${currentAddress.latitude}&longitude=${currentAddress.longitude}` //`/api/hospitals/region/${currentAddress}`
  //     : `/api/support-centers/all`;
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setCenters(response.data);
  //       console.log(response.data);
  //       const sorted = [...response.data]
  //         .sort((a, b) => {
  //           return (
  //             getDistance(currentPosition, a) - getDistance(currentPosition, b)
  //           );
  //         })
  //         .slice(0, 50);
  //       setSelectedCenter(sorted[0]); // 선택된 센터가 처음에 병원 데이터로 업데이트되도록 설정
  //       setSortedCenters(sorted);

  //       if (sorted[0]) {
  //         setMapCenter(
  //           new navermaps.LatLng(sorted[0].latitude, sorted[0].longitude)
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching support centers:', error);
  //     });
  // }, [navermaps, optionCenter, currentPosition, click]);
  useEffect(() => {
    if (!currentPosition) return;

    const fetchData = () => {
      if (optionCenter) {
        // 병원 데이터를 요청
        axios
          .get('/api/hospitals/nearby', {
            params: {
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
            },
          })
          .then((response) => {
            setCenters(response.data);
            console.log('병원 데이터:', response.data);

            const sorted = [...response.data]
              .sort((a, b) => {
                return (
                  getDistance(currentPosition, a) -
                  getDistance(currentPosition, b)
                );
              })
              .slice(0, 50);
            setSelectedCenter(sorted[0]); // 가장 가까운 병원 선택
            setSortedCenters(sorted);

            if (sorted[0]) {
              setMapCenter(
                new navermaps.LatLng(sorted[0].latitude, sorted[0].longitude)
              );
            }
          })
          .catch((error) => {
            console.error('병원 데이터를 가져오는 중 에러 발생:', error);
          });
      } else {
        // 지원센터 데이터를 요청
        axios
          .get('/api/support-centers/all')
          .then((response) => {
            setCenters(response.data);
            console.log('지원센터 데이터:', response.data);

            const sorted = [...response.data]
              .sort((a, b) => {
                return (
                  getDistance(currentPosition, a) -
                  getDistance(currentPosition, b)
                );
              })
              .slice(0, 50);
            setSelectedCenter(sorted[0]); // 가장 가까운 지원센터 선택
            setSortedCenters(sorted);

            if (sorted[0]) {
              setMapCenter(
                new navermaps.LatLng(sorted[0].latitude, sorted[0].longitude)
              );
            }
          })
          .catch((error) => {
            console.error('지원센터 데이터를 가져오는 중 에러 발생:', error);
          });
      }
    };

    fetchData();
  }, [navermaps, optionCenter, currentPosition, click]);
  // 내 위치로 이동
  const moveToCurrentPosition = () => {
    // console.log(currentPosition);
    if (currentPosition) {
      setMapCenter(
        new navermaps.LatLng(
          currentPosition.latitude,
          currentPosition.longitude
        )
      );
    } else {
      console.error('현재 위치를 가져올 수 없습니다.');
    }
  };

  // 거리 구하기
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
  const selectedIconImage = optionCenter
    ? {
        content:
          '<img src="/assets/HospitalChoose.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: relative; width: 60px; height: 60px; left: 0px; top: 0px; z-index: 2;">',
        size: new navermaps.Size(48, 48),
        origin: new navermaps.Point(0, 0),
        anchor: new navermaps.Point(24, 24),
      }
    : {
        content:
          '<img src="/assets/BuildingChoose.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: relative; width: 60px; height: 60px; left: 0px; top: 0px; z-index: 2;">',
        size: new navermaps.Size(48, 48),
        origin: new navermaps.Point(0, 0),
        anchor: new navermaps.Point(24, 24),
      };

  const defaultIconImage = optionCenter
    ? {
        content:
          '<img src="/assets/HospitalLocation.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: relative; width: 40px; height: 40px; left: 0px; top: 0px;">',
        size: new navermaps.Size(24, 24),
        origin: new navermaps.Point(0, 0),
        anchor: new navermaps.Point(12, 12),
      }
    : {
        content:
          '<img src="/assets/BuildingLocation.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: relative; width: 40px; height: 40px; left: 0px; top: 0px;">',
        size: new navermaps.Size(24, 24),
        origin: new navermaps.Point(0, 0),
        anchor: new navermaps.Point(12, 12),
      };

  return (
    <>
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
              key={optionCenter ? center.id : center.support_center_id}
              position={new navermaps.LatLng(center.latitude, center.longitude)}
              title={center.name}
              clickable={true}
              icon={
                selectedCenter && selectedCenter.id === center.id
                  ? selectedIconImage
                  : defaultIconImage
              }
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

      <ChooseMode
        setOptionCenter={setOptionCenter}
        moveToCurrentPosition={moveToCurrentPosition}
        click={click}
        setClick={setClick}
      />
    </>
  );
}

export default SupportCenterMap;
