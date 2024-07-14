import React from 'react';
import './css/JobNoticeList.css';
import JobNotieItem from './JobNotieItem';
import FilterBox from './FilterBox';
import { Location, JOB, EMPLOYMENT, OPTIONS } from './FilterOption';
import './css/common.css';
import { useContext } from 'react';
import { JobContext } from '../App';

const JobNoticeList = ({ data }) => {
  const contextData = useContext(JobContext);

  const jobData = Array.isArray(data) && data.length > 0 ? data : contextData;
  console.log('jobData:', jobData);
  return (
    <>
      <div className="gap"></div>
      <div className="title">📢 채용 공고</div>
      <div className="gap"></div>

      <div className="jobNoticeFilter">
        <FilterBox option={JOB} />
        <FilterBox option={EMPLOYMENT} />
        <Location />
        <div className="filterSort">
          <FilterBox option={OPTIONS} />
        </div>
      </div>
      <div className="JobNoticeList">
        {jobData.map((item) => (
          <JobNotieItem key={item.job_id} {...item} />
        ))}
      </div>
    </>
  );
};

export default JobNoticeList;
