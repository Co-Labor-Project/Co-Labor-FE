// components/JobNoticeDetailsCenter.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "../App";
import "./css/JobNoticeDetailsCenter.css";
import "./css/common.css";

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
          <div className="JobDetailKey">
            <section>마감 기한:</section> {jobData.deadDate}
          </div>
          <div className="JobDetailKey">
            <section>조건: </section>
            {jobData.requirement}
          </div>
          <div className="JobDetailKey">
            <section>연락처:</section> {jobData.enterpriseUser.email}
          </div>
          <div className="JobDetailKey">
            <section>직무 :</section> {jobData.jobRole}
          </div>
          <div className="JobDetailKey">
            <section>경력 : </section>
            {jobData.experience}
          </div>
          <div className="JobDetailKey">
            <section>고용형태 :</section> {jobData.employmentType}
          </div>
          <div className="JobDetailKey">
            <section>근무지역 : </section>
            {jobData.location}
          </div>
          <div className="JobDetailKey">
            <section>스킬 : </section>
            {jobData.skills}
          </div>
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
