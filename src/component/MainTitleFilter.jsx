import React from 'react';
import MainTitle from './MainTitle';
import styled from 'styled-components';
import FilterBox from './filter/FilterBox';
import { JOB, Location } from './filter/FilterOption';
const MainTitleFilter = ({ text }) => {
  return (
    <BaseContainer>
      <MainTitle text={text} />
      <Filter>
        <FilterBox option={JOB} />
        <Location />
      </Filter>
    </BaseContainer>
  );
};

export default MainTitleFilter;
const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 1100px;
`;
