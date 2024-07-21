import React, { useEffect, useState, useRef } from 'react';
import { NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import axios from 'axios';
import './css/SupportCenterMap.css';
import SupportCenterItem from './SupportCenterItem';

function SupportCenterMap() {
  const navermaps = useNavermaps();
  const mapRef = useRef(null);
  const [centers, setCenters] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState(null); // 초기 값 null로 설정
  const [overlays, setOverlays] = useState([]);
  const [nearestCenter, setNearestCenter] = useState(null);
  const [sortedCenters, setSortedCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [hospitalLocation, setHospitalLocation] = useState([]);
  const [optionCenter, setOptionCenter] = useState(false); //false인 경우 지원센터
  useEffect(() => {
    const url = optionCenter
      ? 'http://localhost:8080/api/hospitals/all'
      : 'http://localhost:8080/api/support-centers/all';

    axios
      .get(url)
      .then((response) => {
        setCenters(response.data);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
              setCurrentPosition(pos);

              const sorted = [...response.data].sort((a, b) => {
                return getDistance(pos, a) - getDistance(pos, b);
              });

              setNearestCenter(sorted[0]);
              setSelectedCenter(sorted[0]);
              setSortedCenters(sorted);

              setMapCenter(
                new navermaps.LatLng(sorted[0].latitude, sorted[0].longitude)
              );
            },
            (error) => {
              console.error('Error getting current position:', error);
            }
          );
        }
      })
      .catch((error) => {
        console.error('Error fetching support centers:', error);
      });
  }, [navermaps, optionCenter]);
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/hospitals/all')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setHospitalLocation(data);
  //       console.log(hospitalLocation);
  //     })
  //     .catch((error) => console.error('Error fetching companies:', error));
  // }, []);
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

  useEffect(() => {
    if (mapRef.current && mapRef.current.instance) {
      const map = mapRef.current.instance;

      overlays.forEach((overlay) => overlay.setMap(null));

      const newOverlays = [];

      centers.forEach((center) => {
        const overlay = new navermaps.CustomOverlay({
          map: map,
          position: new navermaps.LatLng(center.latitude, center.longitude),
          content: `<div style="display:none; background: white; border: 1px solid black; padding: 5px;">${center.name}</div>`,
          zIndex: 1,
        });

        navermaps.Event.addListener(overlay, 'mouseover', () => {
          overlay.setContent(
            `<div style="background: white; border: 1px solid black; padding: 5px;">${center.name}</div>`
          );
        });

        navermaps.Event.addListener(overlay, 'mouseout', () => {
          overlay.setContent(
            `<div style="display:none; background: white; border: 1px solid black; padding: 5px;">${center.name}</div>`
          );
        });

        newOverlays.push(overlay);
      });

      if (currentPosition) {
        const currentPosOverlay = new navermaps.CustomOverlay({
          map: map,
          position: new navermaps.LatLng(
            currentPosition.latitude,
            currentPosition.longitude
          ),
          content:
            '<div style="display:none; background: white; border: 1px solid black; padding: 5px;">현재 위치</div>',
          zIndex: 1,
        });

        navermaps.Event.addListener(currentPosOverlay, 'mouseover', () => {
          currentPosOverlay.setContent(
            '<div style="background: white; border: 1px solid black; padding: 5px;">현재 위치</div>'
          );
        });

        navermaps.Event.addListener(currentPosOverlay, 'mouseout', () => {
          currentPosOverlay.setContent(
            '<div style="display:none; background: white; border: 1px solid black; padding: 5px;">현재 위치</div>'
          );
        });

        newOverlays.push(currentPosOverlay);
      }

      setOverlays(newOverlays);
    }
  }, [centers, currentPosition, mapRef.current]);

  const handleCenterClick = (center) => {
    setSelectedCenter(center);
    setMapCenter(new navermaps.LatLng(center.latitude, center.longitude)); // 지도 중심을 선택된 지원 센터로 이동
  };

  return (
    <div className="mapContainer">
      {mapCenter && ( // mapCenter가 null이 아닐 때만 NaverMap 렌더링
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
                  '<img src="/src/assets/current_location_icon.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 40px; height: 40px; left: 0px; top: 0px;">',
                size: new navermaps.Size(24, 24),
                origin: new navermaps.Point(0, 0),
                anchor: new navermaps.Point(12, 12),
              }}
            />
          )}
          {centers.map((center) => (
            <Marker
              key={center.support_center_id}
              position={new navermaps.LatLng(center.latitude, center.longitude)}
              title={center.name}
              clickable={true}
              icon={{
                content:
                  '<img src="/src/assets/support_center_icon.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 40px; height: 40px; left: 0px; top: 0px;">',
                size: new navermaps.Size(24, 24),
                origin: new navermaps.Point(0, 0),
                anchor: new navermaps.Point(12, 12),
              }}
              onClick={() => {
                handleCenterClick(center);

                // alert(`${center.name}\n${center.address}\n${center.phone}`);
              }}
            />
          ))}
        </NaverMap>
      )}

      <div className="sidePage">
        <div className="chooseCenter">
          <div className="selected">
            <div className="selectImg"></div>
            {selectedCenter && (
              <div className="selectedText">
                <p>
                  📌 <b>이름</b>: {selectedCenter.name}
                </p>
                <p>
                  🏢 <b>주소</b>: {selectedCenter.address}
                </p>
                <p>
                  📞 <b>전화번호</b>: {selectedCenter.phone}
                </p>
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
              />
            </div>
          ))}
        </div>
      </div>
      <div className="chooseMode">
        <button
          className="setSupportCenter"
          onClick={() => {
            setOptionCenter(false);
          }}
        >
          지원센터
        </button>
        <button
          className="Hospital"
          onClick={() => {
            setOptionCenter(true);
          }}
        >
          병원
        </button>
      </div>
    </div>
  );
}

export default SupportCenterMap;
