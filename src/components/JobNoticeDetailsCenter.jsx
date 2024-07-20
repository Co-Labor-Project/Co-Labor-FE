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

  // const bold = "조직 소개";
  // if (jobData.description.includes(bold)) {
  //   const tmp = new RegExp(bold, "g");
  //   jobData.description.replace(tmp, "<b>" + bold + "</b>");
  // }
  return (
    <div className="JobDetail">
      <div className="gap2" />
      <h1 className="title">{jobData.title}</h1>
      <div className="gap" />
      <div className="JobDetailsBasicInfo">
        <img
          className="JobDetailsImg"
          src={displayJobPhoto}
          alt={jobData.title}
        />
        <div className="JobNDetailsCondi">
          <div>마감 기한: {jobData.deadDate}</div>
          <div>조건: {jobData.requirement}</div>
          <div>연락처: {jobData.enterpriseUser.email}</div>
          {/* <div> 직무 : {jobData.jobRole}</div>
          <div> 경력 : {jobData.experience}</div>
          <div> 고용형태 : {jobData.employmentType}</div>
          <div> 근무지역 : {jobData.location}</div>
          <div> 스킬 : {jobData.skills}</div> */}
          <div> 직무 : </div>
          <div> 경력 : </div>
          <div> 고용형태 : </div>
          <div> 근무지역 : </div>
          <div> 스킬 : </div>
        </div>
      </div>
      <hr />
      <div className="JobDetailsdescription">
        <pre>{jobData.description}</pre>
      </div>
    </div>
  );
};

export default JobNoticeDetailsCenter;
