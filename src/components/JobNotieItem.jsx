import React from "react";
import "./css/JobNoticeItem.css";
import useScrollFadeIn from "../hooks/fade_in";
import { useNavigate, useParams } from "react-router-dom";
import useEmpty from "../hooks/useEmpty";

const JobNotieItem = ({
  imageName,
  title,
  requirement,
  enterprise,
  job_id,
  jobRole,
  experience,
  employmentType,
  location,
  skills,
  deadDate,
}) => {
  const fadeInProps = useScrollFadeIn("up", 1);
  const nav = useNavigate();
  const parms = useParams();
  const isObjEmpty = useEmpty(parms);
  const name = enterprise?.name || "No Enterprise Name";

  console.log(imageName);
  if (!imageName) {
    imageName =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s";
  } else {
    imageName = "http://localhost:8080/static/images/" + imageName;
  }
  const clickHandler = () => {
    if (
      isObjEmpty ||
      parms.keyword === "undefined" ||
      parms.keyword === undefined
    ) {
      nav(`/JobNotice/${job_id}`);
    } else {
      nav(`/Search/${parms.keyword}/jobNotice/${job_id}`);
    }
  };

  return (
    <div {...fadeInProps}>
      <div className="JobNotieItem" onClick={clickHandler}>
        <div>
          <div className="jobNoticeInfo">
            <div className="jobNotice_infoName">{name}</div>
          </div>
          <img className="jobNoticeImg" src={imageName} />
        </div>
        <div className="jobNoticeInfo">
          <div className="jobNotice_infoTitle">{title}</div>
          <div className="jobNotice_infoCondi">마감 기한 : {deadDate}</div>
          <div className="jobNotice_infoCondi">직무 : {jobRole}</div>
          <div className="jobNotice_infoCondi">고용형태 : {employmentType}</div>
          <div className="jobNotice_infoCondi">근무지역 : {location}</div>
        </div>
      </div>
    </div>
  );
};

export default JobNotieItem;
