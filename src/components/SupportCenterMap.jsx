import React, { useEffect, useState, useRef } from 'react';
import { NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import axios from 'axios';

function SupportCenterMap() {
  const navermaps = useNavermaps();
  const mapRef = useRef(null);
  const [centers, setCenters] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState(new navermaps.LatLng(36.632473380701, 127.45314301376));
  const [overlays, setOverlays] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/support-centers/all')
      .then(response => {
        setCenters(response.data);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              };
              setCurrentPosition(pos);

              const nearestCenter = response.data.reduce((prev, curr) => {
                const prevDistance = getDistance(pos, prev);
                const currDistance = getDistance(pos, curr);
                return prevDistance < currDistance ? prev : curr;
              }, response.data[0]);

              setMapCenter(new navermaps.LatLng(nearestCenter.latitude, nearestCenter.longitude));
            },
            (error) => {
              console.error('Error getting current position:', error);
            }
          );
        }
      })
      .catch(error => {
        console.error('Error fetching support centers:', error);
      });
  }, [navermaps]);

  const getDistance = (pos1, pos2) => {
    const toRad = (value) => value * Math.PI / 180;
    const R = 6371;
    const dLat = toRad(pos2.latitude - pos1.latitude);
    const dLon = toRad(pos2.longitude - pos1.longitude);
    const lat1 = toRad(pos1.latitude);
    const lat2 = toRad(pos2.latitude);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  useEffect(() => {
    if (mapRef.current && mapRef.current.instance) {
      const map = mapRef.current.instance;

      overlays.forEach(overlay => overlay.setMap(null));

      const newOverlays = [];

      centers.forEach(center => {
        const overlay = new navermaps.CustomOverlay({
          map: map,
          position: new navermaps.LatLng(center.latitude, center.longitude),
          content: `<div style="display:none; background: white; border: 1px solid black; padding: 5px;">${center.name}</div>`,
          zIndex: 1
        });

        navermaps.Event.addListener(overlay, 'mouseover', () => {
          overlay.setContent(`<div style="background: white; border: 1px solid black; padding: 5px;">${center.name}</div>`);
        });

        navermaps.Event.addListener(overlay, 'mouseout', () => {
          overlay.setContent(`<div style="display:none; background: white; border: 1px solid black; padding: 5px;">${center.name}</div>`);
        });

        newOverlays.push(overlay);
      });

      if (currentPosition) {
        const currentPosOverlay = new navermaps.CustomOverlay({
          map: map,
          position: new navermaps.LatLng(currentPosition.latitude, currentPosition.longitude),
          content: '<div style="display:none; background: white; border: 1px solid black; padding: 5px;">현재 위치</div>',
          zIndex: 1
        });

        navermaps.Event.addListener(currentPosOverlay, 'mouseover', () => {
          currentPosOverlay.setContent('<div style="background: white; border: 1px solid black; padding: 5px;">현재 위치</div>');
        });

        navermaps.Event.addListener(currentPosOverlay, 'mouseout', () => {
          currentPosOverlay.setContent('<div style="display:none; background: white; border: 1px solid black; padding: 5px;">현재 위치</div>');
        });

        newOverlays.push(currentPosOverlay);
      }

      setOverlays(newOverlays);
    }
  }, [centers, currentPosition, mapRef.current]);

  return (
    <NaverMap
      ref={mapRef}
      center={mapCenter}
      defaultZoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      {currentPosition && (
        <Marker
          position={new navermaps.LatLng(currentPosition.latitude, currentPosition.longitude)}
          title="현재 위치"
          clickable={true}
          icon={{
            content: '<img src="/src/assets/current_location_icon.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 40px; height: 40px; left: 0px; top: 0px;">',
            size: new navermaps.Size(24, 24),
            origin: new navermaps.Point(0, 0),
            anchor: new navermaps.Point(12, 12),
          }}
        />
      )}
      {centers.map(center => (
        <Marker
          key={center.support_center_id}
          position={new navermaps.LatLng(center.latitude, center.longitude)}
          title={center.name}
          clickable={true}
          icon={{
            content: '<img src="/src/assets/support_center_icon.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 40px; height: 40px; left: 0px; top: 0px;">',
            size: new navermaps.Size(24, 24),
            origin: new navermaps.Point(0, 0),
            anchor: new navermaps.Point(12, 12),
          }}
          onClick={() => {
            alert(`${center.name}\n${center.address}\n${center.phone}`);
          }}
        />
      ))}
    </NaverMap>
  );
}

export default SupportCenterMap;
