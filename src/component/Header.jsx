import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/search_icon.png';
import { useNavigate } from 'react-router-dom';
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

  const handleJobNoticeApply = async () => {
    try {
      const response1 = await fetch(
        `${
          import.meta.env.VITE_SERVER_URL
        }:8080/auth/hasEnterprise?username=${sessionStorage.getItem(
          'username'
        )}`,
        {
          method: 'GET',
          credentials: 'include', // 세션 쿠키 포함
        }
      );

      const hasEnterprise = await response1.json();

      if (!hasEnterprise) {
        alert('기업 등록을 먼저 해주세요!');
        nav('/');
      } else {
        nav('/JobNoticeApply');
      }
    } catch (error) {
      console.error('Error checking enterprise:', error);
    }
  };

  return (
    <BaseContiner>
      <Logo onClick={() => nav('/')}></Logo>
      <IndexContiner onClick={() => nav('/Enterprises')}>
        기업 정보
      </IndexContiner>
      <IndexContiner onClick={() => nav('/JobNotice')}>채용 공고</IndexContiner>
      {!loginState.userEnterprise && (
        <IndexContiner onClick={() => nav('/IegalAdvice')}>
          법률 상담
        </IndexContiner>
      )}
      <IndexContiner onClick={() => nav('/Support')}>
        노동자 지원센터
      </IndexContiner>

      <SearchBox>
        <SearchBoxInner
          type="text"
          placeholder="기업 정보와 채용 공고, 기업 리뷰를 검색해보세요!"
          onChange={changeInput}
          onKeyDown={keyHandler}
        />
        <SearchBoxIcon src={searchIcon} onClick={searchHandler} />
      </SearchBox>
      <RightWrapper>
        {loginState.userEnterprise && (
          <ApplyButton onClick={handleJobNoticeApply} $Apply={true}>
            채용공고 등록
          </ApplyButton>
        )}
        {loginState.userEnterprise && (
          <ApplyButton
            onClick={() => {
              nav('/EnterpriseApply');
            }}
            $Apply={false}
          >
            기업 등록
          </ApplyButton>
        )}
      </RightWrapper>
      {!loginState.userLogin && !loginState.userEnterprise && (
        <IndexContiner onClick={() => nav('/SingIn')}>
          로그인 / 회원가입
        </IndexContiner>
      )}
    </BaseContiner>
  );
};

export default Header;

const BaseContiner = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(226, 226, 226);
  font-size: 15px;

  padding: 5px 0px;
  z-index: 100;
`;
const Logo = styled.div`
  background-image: url('/src/assets/Co-labor.png');
  width: 140px;
  height: 70px;
  background-size: cover;
  &:hover {
    width: 160px;
    height: 70px;
  }
`;

const IndexContiner = styled.div`
  display: flex;
  padding: 0px 18px;
  cursor: pointer;
  transition: width 1s, height 1s, border 1s, font-size 0.5s;
  font-weight: bold;
  &:hover {
    font-size: 19px;
  }
`;
const SearchBox = styled.div`
  display: flex;
  padding: 0px 18px;
  transition: width 1s, height 1s, border 1s, font-size 0.5s;
  font-weight: bold;
  border: 3px solid #58c179;
  width: 500px;
  height: 40px;
  border-radius: 20px;
  margin: auto;
  &:focus-within {
    border: 4px solid #a1e2a1;
    width: 600px;
    height: 50px;
  }
`;

const SearchBoxInner = styled.input`
  border: none;
  width: 100%;
  font-size: 18px;
  outline: none;
`;
const SearchBoxIcon = styled.img`
  height: 30px;
  width: 30px;
  margin: auto;
  z-index: 1px;
`;

const ApplyButton = styled.div`
  color:${({ $Apply }) => ($Apply ? 'rgb(248, 61, 61)' : '#2c88f8')};
  border: 2px solid   color:${({ $Apply }) =>
    $Apply ? 'rgb(248, 61, 61)' : '#2c88f8'};
  ;
  padding: 8px;
  border-radius: 15px;
  height: 55px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-left: 15px;
  font-weight: bold;
  &:hover {
    font-size: 19px;
  }
  transition: width 1s, height 1s, border 1s, font-size 0.5s;

`;
const RightWrapper = styled.div`
  display: flex;
`;
