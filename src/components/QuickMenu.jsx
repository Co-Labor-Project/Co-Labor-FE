import React from 'react';
import './css/QuickMenu.css';
import searchIcon from '../assets/search_icon.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const QuickMenu = () => {
  const nav = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  const changeInput = (e) => {
    setSearchKeyword(e.target.value);
  };
  const searchHandler = () => {
    nav(`/search/${searchKeyword}`);
    setSearchKeyword('');
  };
  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  };
  return (
    <div className="QuickMenu">
      <div className="section1">
        <img src="src\assets\Ai_Icon.png" width="40px" height="40px" />
        &nbsp;AI로 내가 원하는 일자리 찾기
      </div>
    </div>
  );
};

export default QuickMenu;
