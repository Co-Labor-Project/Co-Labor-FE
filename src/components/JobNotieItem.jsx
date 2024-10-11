import React, { useState, useEffect } from 'react';
import './css/JobNoticeItem.css';
import useScrollFadeIn from '../hooks/fade_in';
import { useNavigate, useParams } from 'react-router-dom';
import useEmpty from '../hooks/useEmpty';

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
  const fadeInProps = useScrollFadeIn('up', 1);
  const nav = useNavigate();
  const parms = useParams();
  const isObjEmpty = useEmpty(parms);
  const name = enterprise?.name || 'No Enterprise Name';
  const defaultImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s';
  const [imageSrc, setImageSrc] = useState(defaultImage);

  useEffect(() => {
    const checkImage = async () => {
      if (!imageName) {
        return;
      }

      const url = `${
        import.meta.env.VITE_SERVER_URL
      }:8080/static/images/${imageName}`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          setImageSrc(url);
        } else if (response.status === 404) {
          const fallbackUrl = `/api/jobs/images/${imageName}`;
          const fallbackResponse = await fetch(fallbackUrl);
          if (fallbackResponse.ok) {
            setImageSrc(fallbackUrl);
          } else {
            setImageSrc(defaultImage);
          }
        } else {
          setImageSrc(defaultImage);
        }
      } catch (error) {
        setImageSrc(defaultImage);
      }
    };

    checkImage();
  }, [imageName]);

  const clickHandler = () => {
    if (
      isObjEmpty ||
      parms.keyword === 'undefined' ||
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
          <img className="jobNoticeImg" src={imageSrc} alt={title} />
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
