import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  CityOptions,
  Classification,
  CountyOptions,
  Task,
} from './FilterOption';

const FilterBar = ({ selected, setSelected, handleChange, ifJob }) => {
  useEffect(() => {
    console.log('Updated selected:', selected);
  }, [selected]);

  const onClear = () => {
    handleChange({ target: { name: 'city', value: '지역' } });
    handleChange({ target: { name: 'county', value: '지역 (시/군)' } });
    handleChange({ target: { name: 'type', value: '기업 분류' } });
    handleChange({ target: { name: 'task', value: '' } });
  };
  return (
    <BaseContainer>
      <FilterIconStyled
        src="/assets/filter.svg"
        alt="Filter Icon"
        onClick={onClear}
      />
      {ifJob && (
        <FilterBox
          name="task"
          value={selected.task}
          onChange={handleChange}
          options={Task}
        />
      )}
      {!ifJob && (
        <FilterBox
          name="type"
          value={selected.type}
          onChange={handleChange}
          options={Classification}
        />
      )}

      {/* 지역 필터 */}
      <FilterContainer
        name="city"
        value={selected.city}
        onChange={handleChange}
      >
        {CityOptions.map((city) => (
          <option key={city.value} value={city.value}>
            {city.label}
          </option>
        ))}
      </FilterContainer>

      {selected.city !== '지역' &&
        selected.counties &&
        selected.counties.length > 0 && (
          <FilterContainer
            name="county"
            value={selected.county}
            onChange={handleChange}
          >
            {selected.counties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </FilterContainer>
        )}
    </BaseContainer>
  );
};

export default FilterBar;

const FilterBox = ({ name, value, onChange, options }) => (
  <FilterContainer name={name} value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </FilterContainer>
);

export const ChooseRegion = ({ value, onChange }) => {
  const [selectedCity, setSelectedCity] = useState(value.city || '지역');
  const [selectedCounty, setSelectedCounty] = useState(value.county || ''); // 선택된 군/구 상태 추가
  const [counties, setCounties] = useState(CountyOptions[selectedCity] || []);

  useEffect(() => {
    const newCounties = CountyOptions[selectedCity] || [];
    setCounties(newCounties);
    setSelectedCounty(newCounties[0] || ''); // 도시 변경 시 첫 번째 군/구를 선택
    onChange({ target: { name: 'city', value: selectedCity } });
    onChange({ target: { name: 'county', value: newCounties[0] || '' } });
  }, [selectedCity]);

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
  };

  const handleCountyChange = (e) => {
    const county = e.target.value;
    setSelectedCounty(county);
    onChange({ target: { name: 'county', value: county } });
  };

  return (
    <Container>
      <FilterContainer value={selectedCity} onChange={handleCityChange}>
        {CityOptions.map((city) => (
          <option key={city.value} value={city.value}>
            {city.label}
          </option>
        ))}
      </FilterContainer>

      {selectedCity !== '지역' && counties.length > 0 && (
        <FilterContainer value={selectedCounty} onChange={handleCountyChange}>
          {counties.map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </FilterContainer>
      )}
    </Container>
  );
};

const FilterIconStyled = styled.img`
  flex-shrink: 0;
  height: 40px;
`;
const Container = styled.div`
  height: 40px;
  gap: 4px;
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BaseContainer = styled.div`
  height: 60px;
  gap: 10px;
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const FilterContainer = styled.select`
  /* display: inline-block; */
  width: auto;
  padding: 8px 16px;
  padding-right: 34px;
  border-radius: 24px;
  height: 40px;
  border: 1px solid #bfbfbf;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  font-size: 16px;
  font-weight: 500;
  /* color: white; //이거 */
  background-color: white;
  -webkit-appearance: none; // macOS 및 iOS에서 기본 스타일 제거
  -moz-appearance: none; // Firefox에서 기본 스타일 제거
  -o-appearance: none;
  appearance: none; // 기본 화살표 아이콘 제거
  background-image: url('/assets/arrow-down-grey-filter.svg');
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px 16px;
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 처리 */
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */
  overflow: hidden; /* 넘치는 텍스트가 잘리도록 설정 */
  cursor: pointer;
  outline: none;

  &:hover {
    border: 2px solid #58c179;
    outline: none;
  }
`;
