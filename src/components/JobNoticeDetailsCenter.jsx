// components/JobNoticeDetailsCenter.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "../App";
import "./css/JobNoticeDetailsCenter.css";

const JobNoticeDetailsCenter = () => {
  const params = useParams();
  const contextData = useContext(JobContext);
  const jobId = params.job_id;

  const jobData = contextData.find(
    (item) => String(item.job_id) === String(jobId)
  );

  if (!jobData) {
    return <div>Loading</div>;
  }

  const displayJobPhoto =
    jobData.imageName ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s";

  return (
    <div className="JobNoticeDetail">
      <h1 className="title">{jobData.title} 채용 정보</h1>
      <div className="gap"></div>
      <div className="JobNoticeDetailsBasicInfo">
        <img
          className="JobNoticeDetailsImg"
          src={displayJobPhoto}
          alt={jobData.title}
        />
        <div className="JobNoticeDetailsText">
          {jobData.requirement && (
            <div className="JobNoticeDetailsReq">
              조건: {jobData.requirement}
            </div>
          )}
          <div className="JobNoticeDetailsDescription">
            설명: {jobData.description}
          </div>
          <div className="JobNoticeDetailsDead">
            마감 기한: {jobData.dead_date}
          </div>
          <div className="JobNoticeDetailsEmail">
            연락처: {jobData.enterpriseUser.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobNoticeDetailsCenter;
