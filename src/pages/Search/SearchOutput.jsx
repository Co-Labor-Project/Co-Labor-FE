import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import JobNoticeList from '../Jobs/components/JobNoticeList';
import CompanyList from '../Enterprises/components/EnterprisesList';
import { fetchData } from '../../apis/search';
import MainTitle from '../../components/MainTitle';

const SearchOutput = ({ input }) => {
  const [enterprises, setEnterprises] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearchNull, setIsSearchNull] = useState({
    enterprises: false,
    jobs: false,
  });
  const url = `/api/search?keyword=${input}`;

  useEffect(() => {
    fetchData({ url, setEnterprises, setJobs, setLoading });
  }, [input]);

  useEffect(() => {
    if (enterprises.length === 0) {
      setIsSearchNull((prevInput) => ({
        ...prevInput,
        enterprises: true,
      }));
    } else {
      setIsSearchNull((prevInput) => ({
        ...prevInput,
        enterprises: false,
      }));
    }
    if (jobs.length === 0) {
      setIsSearchNull((prevInput) => ({
        ...prevInput,
        jobs: true,
      }));
    } else {
      setIsSearchNull((prevInput) => ({
        ...prevInput,
        jobs: false,
      }));
    }
  }, [enterprises, jobs]);

  return (
    <BaseContainer>
      <InputText>
        <h1> &quot; {input} &quot; 검색 결과</h1>
      </InputText>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ContentContainer>
          <MainTitle text="🏢 기업 정보" />
          <CompanyList data={enterprises} searchNull={isSearchNull} />
          <MainTitle text="📢 채용 공고" />
          <JobNoticeList data={jobs} searchNull={isSearchNull} />
        </ContentContainer>
      )}
    </BaseContainer>
  );
};

export default SearchOutput;
const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const InputText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ContentContainer = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;
