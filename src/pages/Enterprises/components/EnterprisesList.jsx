import React, { useContext, useState, useRef, useEffect } from 'react';
import EnterprisesItem from './EnterprisesItem';
import { useNavigate } from 'react-router-dom';
import FilterBox from '../../../component/filter/FilterBox';
import { Location, JOB } from '../../../component/filter/FilterOption';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { CompanyContext } from '../../../App';
import MainTitle from '../../../component/MainTitle';
import styled from 'styled-components';
import {
  LoadingSpinner,
  LoadingText,
  LoadingWrapper,
} from '../../../component/CommonStyled';
const CompanyList = ({ data, searchNull }) => {
  const contextData = useContext(CompanyContext);
  console.log(contextData);
  const companyData =
    Array.isArray(data) && data.length > 0 ? data : contextData;
  const nav = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [visibleItems, setVisibleItems] = useState(12);
  const listRef = useRef();
  const [viewAll, setViewAll] = useState(false);

  const changeInput = (e) => {
    setSearchKeyword(e.target.value);
  };

  const arr1 = companyData.length < 12 ? companyData : companyData.slice(0, 12);

  const itemsToShow = viewAll ? companyData : arr1;

  const searchHandler = () => {
    if (searchKeyword === '') {
      alert('❌ 검색어를 입력해 주세요!');
    } else {
      nav(`/AiSearch/${searchKeyword}`);
      setSearchKeyword('');
    }
  };

  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  };

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loadMoreItems();
        }
      },
      { threshold: 1 }
    )
  );

  const [target, setTarget] = useState(null);

  useEffect(() => {
    const currentElement = target;
    const currentObserver = observer.current;

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [target]);

  useEffect(() => {
    if (viewAll && target) {
      observer.current.observe(target);
    }
  }, [viewAll, target]);

  const moreButton = () => {
    setViewAll(true);
    loadMoreItems();
  };

  return (
    <>
      <BaseContainer ref={listRef}>
        {itemsToShow.slice(0, visibleItems).map((item) => (
          <EnterprisesItem key={item.enterprise_id} {...item} />
        ))}
        {viewAll && visibleItems < companyData.length && (
          <div ref={setTarget}>
            <LoadingWrapper>
              <LoadingSpinner></LoadingSpinner>
              <LoadingText>🤖 기업정보를 불러오는 중 입니다...</LoadingText>
            </LoadingWrapper>
          </div>
        )}
      </BaseContainer>
      <ButtonWrapper>
        {!viewAll && companyData.length > 12 && (
          <MoreButton onClick={moreButton}>더보기</MoreButton>
        )}
      </ButtonWrapper>
    </>
  );
};

export default CompanyList;
const BaseContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;
const ButtonWrapper = styled.div`
  margin: 30px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoreButton = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 16px;
  transition: 0.25s;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: aliceblue;
  color: var(--primary-color);

  &:hover {
    letter-spacing: 2px;
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    transform: scale(1.5);
  }
`;
