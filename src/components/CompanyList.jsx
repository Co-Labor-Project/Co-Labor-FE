// import React, {
//   useContext,
//   useState,
//   useRef,
//   useEffect,
//   useCallback,
// } from 'react';
// import CompanyItem from './CompanyItem';
// import { useNavigate } from 'react-router-dom';
// import './css/CompanyList.css';
// import FilterBox from './FilterBox';
// import { Location, JOB } from './FilterOption';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
// import { CompanyContext } from '../App';

// const CompanyList = ({ data }) => {
//   const contextData = useContext(CompanyContext);
//   const companyData =
//     Array.isArray(data) && data.length > 0 ? data : contextData;
//   const nav = useNavigate();
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [visibleItems, setVisibleItems] = useState(12);
//   const listRef = useRef();
//   const [viewAll, setViewAll] = useState(false);
//   const [viewAllFlag, setViewAllFlag] = useState(false);
//   const changeInput = (e) => {
//     setSearchKeyword(e.target.value);
//     console.log(viewAll);
//     console.log(itemsToShow);
//   };
//   const arr1 = companyData.slice(12);
//   const itemsToShow = viewAll ? companyData : arr1;

//   const searchHandler = () => {
//     if (searchKeyword === '') {
//       alert('❌ 검색어를 입력해 주세요!');
//     } else {
//       nav(`/AiSearch/${searchKeyword}`);
//       setSearchKeyword('');
//     }
//   };

//   const keyHandler = (e) => {
//     if (e.keyCode === 13) {
//       searchHandler();
//     }
//   };

//   const loadMoreItems = () => {
//     setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
//   };

//   const observer = useRef(
//     new IntersectionObserver(
//       (entries) => {
//         const first = entries[0];
//         if (first.isIntersecting) {
//           loadMoreItems();
//         }
//       },
//       { threshold: 1 }
//     )
//   );

//   const [target, setTarget] = useState(null);

//   useEffect(() => {
//     const currentElement = target;
//     const currentObserver = observer.current;
//     console.log(currentElement);

//     if (currentElement) {
//       currentObserver.observe(currentElement);
//     }

//     return () => {
//       if (currentElement) {
//         currentObserver.unobserve(currentElement);
//       }
//     };
//   }, [target]);

//   useEffect(() => {
//     if (viewAll && target) {
//       observer.current.observe(target);
//     }
//   }, [viewAll, target]);

//   const moreButton = () => {
//     setViewAll(true);

//     console.log(true);
//     loadMoreItems();
//     console.log('이게 씨발?', viewAll);
//     setViewAllFlag(true);
//   };

//   return (
//     <div>
//       <div className="searchContainer">
//         <TextField
//           className="companylist_AI_search"
//           label="🤖 AI 기반으로 무엇이든 검색해보세요!  "
//           multiline
//           maxRows={4}
//           color="success"
//           onChange={changeInput}
//           onKeyDown={keyHandler}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <SearchIcon
//                   onClick={searchHandler}
//                   style={{ cursor: 'pointer' }}
//                 />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </div>
//       <div className="gap"></div>
//       <div className="title">🏢 기업 정보</div>
//       <div className="gap"></div>

//       <div className="jobNoticeFilter">
//         <FilterBox option={JOB} />
//         <Location />
//       </div>

//       <div className="companyList" ref={listRef}>
//         {itemsToShow.slice(0, visibleItems).map((item) => (
//           <CompanyItem key={item.enterprise_id} {...item} />
//         ))}
//         {visibleItems < companyData.length && (
//             <div ref={setTarget} className="loading">
//               Loading...
//             </div>
//           ) &&
//           viewAll}
//       </div>
//       {!viewAll && <button onClick={moreButton}>더보기</button>}
//     </div>
//   );
// };

// export default CompanyList;
import React, { useContext, useState, useRef, useEffect } from 'react';
import CompanyItem from './CompanyItem';
import { useNavigate } from 'react-router-dom';
import './css/CompanyList.css';
import FilterBox from './FilterBox';
import { Location, JOB } from './FilterOption';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { CompanyContext } from '../App';

const CompanyList = ({ data }) => {
  const contextData = useContext(CompanyContext);
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
  const arr1 = companyData.slice(12);
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

    // if (currentElement) {
    //   currentObserver.observe(currentElement);
    // }

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
    <div>
      <div className="searchContainer">
        <TextField
          className="companylist_AI_search"
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
      </div>
      <div className="gap"></div>
      <div className="title">🏢 기업 정보</div>
      <div className="gap"></div>

      <div className="jobNoticeFilter">
        <FilterBox option={JOB} />
        <Location />
      </div>

      <div className="companyList" ref={listRef}>
        {itemsToShow.slice(0, visibleItems).map((item) => (
          <CompanyItem key={item.enterprise_id} {...item} />
        ))}
        {viewAll && visibleItems < companyData.length && (
          <div ref={setTarget} className="loading">
            Loading...
          </div>
        )}
      </div>
      {!viewAll && <button onClick={moreButton}>더보기</button>}
    </div>
  );
};

export default CompanyList;
