import React from "react";
import "./css/JobNoticeItem.css";
import useScrollFadeIn from "../hooks/fade_in";
import { useNavigate, useParams } from "react-router-dom";
import useEmpty from "../hooks/useEmpty";

const JobNotieItem = ({
  photo,
  title,
  requirement,
  enterprise,
  description,
  job_id,
}) => {
  const fadeInProps = useScrollFadeIn("up", 1);
  const nav = useNavigate();
  const parms = useParams();
  const isObjEmpty = useEmpty(parms);
  const name = enterprise?.name || "No Enterprise Name";

  if (!photo) {
    photo =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s";
  }
  const clickHandler = () => {
    if (isObjEmpty) {
      nav(`/JobNotice/${job_id}`);
    } else {
      nav(`/Search/${parms.keyword}/jobNotice/${job_id}`);
    }
  };

  return (
    <div {...fadeInProps}>
      <div className="JobNotieItem" onClick={clickHandler}>
        <div>
          <img className="jobNoticeImg" src={photo} />
        </div>
        <div className="jobNoticeInfo">
          <div className="jobNotice_infoName">{name}</div>
          <div className="jobNotice_infoTitle">{title}</div>
          <div className="jobNotice_infoCondi">{requirement}</div>
          <div className="jobNotice_infoDescription">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default JobNotieItem;
