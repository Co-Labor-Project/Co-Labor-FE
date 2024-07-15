import React from 'react';
import './css/JobNoticeDetailsCenter.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { JobContext } from '../App';
const JobNoticeDetailsCenter = () => {
  const parms = useParams();
  const contextData = useContext(JobContext);
  const id = parms.job_id;
  const { address, condition, name, photo, role, title } = contextData.find(
    (item) => String(item.job_id) === String(id)
  );
  return (
    <div>
      <h1>기업 상세 정보 페이지</h1>
      <h1>job_id : {parms.job_id}</h1>
      <div>{address}</div>
      <div>{condition}</div>
      <div>{name}</div>
      <div>
        <img src={photo} width="100px" />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default JobNoticeDetailsCenter;
