import React from 'react';
import searchIcon from '../assets/search_icon.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from 'react-naver-maps';
import './css/QuickMenu.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import JobNotieItem from './JobNotieItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'; // 올바른 import 문
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
const mockData = [
  {
    id: 1,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 2,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 3,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 4,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 5,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학',
  },
  {
    id: 6,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 7,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 8,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 9,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
];
const QuickMenu = () => {
  const nav = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  const changeInput = (e) => {
    setSearchKeyword(e.target.value);
  };

  const searchHandler = () => {
    if (searchKeyword === '') {
      alert('❌ 검색어를 입력해 주세요!');
    } else {
      nav(`/search/${searchKeyword}`);
      setSearchKeyword('');
    }
  };

  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  };

  return (
    <div className="QuickMenu">
      <div className="introduce1">
        <div>{/* <h3>여기다가 무슨 글 쓰지</h3> */}</div>
        <TextField
          className="AI_search"
          label="🤖 AI 기반으로 무엇이든 검색해보세요!  "
          multiline
          maxRows={4}
          color="success"
          onChange={changeInput}
          onKeyDown={keyHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                  onClick={searchHandler}
                  style={{ cursor: 'pointer' }}
                />
              </InputAdornment>
            ),
          }}
        />
        <div className="jobNoticeIntroduce">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={-40}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {mockData.map((item) => (
              <SwiperSlide key={item.id}>
                <JobNotieItem key={item.id} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="introduce2">
        <div className="map_introduce">
          <MapDiv
            style={{
              width: '300px',
              height: '300px',
            }}
          >
            <MyMap />
          </MapDiv>
        </div>

        <div className="legalAdvice_introduce"></div>
      </div>
    </div>
  );
};

export default QuickMenu;
