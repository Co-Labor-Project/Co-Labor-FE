import React from 'react';
import { useNavigate } from 'react-router-dom';

import './css/Header.css';
import CompanyInfo from './Dropdown/CompanyInfo';
import JobNotice from './Dropdown/JobNotice';
const Header = () => {
  const nav = useNavigate();

  return (
    <div className="Header">
      <div className="logo" onClick={() => nav('/')}></div>
      <div onClick={() => nav('/CompanyInfo')}>기업 정보</div>
      <div onClick={() => nav('/JobNotice')}>채용 공고</div>
      <div onClick={() => nav('/IegalAdvice')}>법률 상담</div>
      <div onClick={() => nav('/Support')}>노동자 지원센터</div>
      <div className="right-child">
        <div>로그인</div>
      </div>
      <div>회원가입</div>
    </div>
  );
};

export default Header;
