import React from 'react';
import './css/Header.css';
import { useState } from 'react';
import CompanyInfo from './Dropdown/CompanyInfo';
import JobNotice from './Dropdown/JobNotice';

const Header = () => {
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);
  return (
    <div className="Header">
      <div className="logo"></div>
      <ul
        onClick={() => {
          setView(!view);
        }}
      >
        기업 정보 {view ? '∧' : '∨'}
        {view && <CompanyInfo />}
      </ul>
      <ul
        onClick={() => {
          setView2(!view2);
        }}
      >
        채용 공고 {view2 ? '∧' : '∨'}
        {view2 && <JobNotice />}
      </ul>
      <div>법률 상담</div>
      <div>노동자 지원센터</div>
      <div className="right-child">로그인</div>
      <div>회원가입</div>
    </div>
  );
};

export default Header;
