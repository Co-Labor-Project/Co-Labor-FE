import CompanyItem from './CompanyItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/CompanyList.css';
import FilterBox from './FilterBox';
import { Location, JOB, EMPLOYMENT, OPTIONS } from './FilterOption';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { CompanyContext } from '../App';

const CompanyList = ({ data }) => {
  const contextData = useContext(CompanyContext);

  const companyData =
    Array.isArray(data) && data.length > 0 ? data : contextData;
  console.log('companyData:', companyData);
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

      <div className="companyList">
        {companyData.map((item) => (
          <CompanyItem key={item.enterprise_id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
