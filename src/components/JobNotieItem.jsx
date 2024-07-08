import React from 'react';
import './css/JobNoticeItem.css';
import useScrollFadeIn from '../hooks/fade_in';

const JobNotieItem = ({ id, photo, name, title, condition }) => {
  const fadeInProps = useScrollFadeIn('up', 1);
  return (
    <div {...fadeInProps}>
      <div className="JobNotieItem">
        <div>
          <img className="companyImg" src={photo} />
        </div>
        <div className="companyInfo">
          <div className="infoName">{name}</div>
          <div className="infoTitle">{title}</div>
          <div className="infoCondi">{condition}</div>
        </div>
      </div>
    </div>
  );
};

export default JobNotieItem;
