import React, { useState, useContext } from 'react';
import './css/Header.css';
import searchIcon from '../assets/search_icon.png';
import { useNavigate } from 'react-router-dom';
import EnterpriseApply from '../pages/EnterpriseApply';
import { LoginContext } from '../App';

const Header = () => {
  const nav = useNavigate();
  const { loginState, setLoginState } = useContext(LoginContext);
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
    console.log(loginState);
  };
  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  };
  return (
    <div className="Header">
      <div className="logo" onClick={() => nav('/')}></div>
      <div onClick={() => nav('/CompanyInfo')}>기업 정보</div>
      <div onClick={() => nav('/JobNotice')}>채용 공고</div>
      <div onClick={() => nav('/IegalAdvice')}>법률 상담</div>
      <div onClick={() => nav('/Support')}>노동자 지원센터</div>
      <div className="searchBox">
        <input
          type="text"
          className="searchBoxInner"
          placeholder="기업 정보와 채용 공고, 기업 리뷰를 검색해보세요!"
          onChange={changeInput}
          onKeyDown={keyHandler}
        />
        <img
          className="searchBoxIcon"
          src={searchIcon}
          onClick={searchHandler}
        />
      </div>
      <div className="right-child">
        {loginState.userEnterprise && (
          <div
            className="jobNoticeApply"
            onClick={() => {
              nav('/JobNoticeApply');
            }}
          >
            채용공고 등록
          </div>
        )}
        {loginState.userEnterprise && (
          <div
            className="enterpriseApply"
            onClick={() => {
              nav('/EnterpriseApply');
            }}
          >
            기업 등록
          </div>
        )}
      </div>
      {!loginState.userLogin && !loginState.userEnterprise && (
        <div onClick={() => nav('/SingIn')}>로그인 / 회원가입</div>
      )}
    </div>
  );
};

export default Header;
