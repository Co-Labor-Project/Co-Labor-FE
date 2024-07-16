import React from 'react';
import './css/SearchOutput.css';
import { useEffect, useState, useRef } from 'react';
import JobNoticeList from './JobNoticeList';
import CompanyList from './CompanyList';
const SearchOutput = ({ input }) => {
  const [enterprises, setEnterprises] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = window.location.href;
  let desURL = '';
  if (url.indexOf('AiSearch') === -1) {
    desURL = `http://localhost:8080/search?keyword=${input}`;
  } else {
    desURL = `http://localhost:8080/ai-search?sentence=${input}`;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(desURL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        });
        if (!response.ok) {
          throw new Error('데이터 불러오기 실패');
        }

        console.log(response);

        const data = await response.json();
        // console.log('data:', data);

        setEnterprises(data.enterprises || []);
        setJobs(data.jobs || []);
        setReviews(data.reviews || []);
        // console.log(data.enterprises);
        console.log('data.job:', data.jobs);
        // console.log(data.reviews);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, [input]);

  return (
    <div>
      <div className="inputText">
        <h2> &quot;{input}&quot; 검색 결과</h2>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CompanyList data={enterprises} />
          <JobNoticeList data={jobs} />
        </>
      )}
    </div>
  );
};

export default SearchOutput;
