import React from 'react';
import './css/JobNoticeItem.css';
import useScrollFadeIn from '../hooks/fade_in';

const JobNotieItem = ({ id, photo, name, title, condition }) => {
  const fadeInProps = useScrollFadeIn('up', 1);
  return (
    <div {...fadeInProps}>
      <div className="JobNotieItem">
        <div>
          <img className="jobNoticeImg" src={photo} />
        </div>
        <div className="jobNoticeInfo">
          <div className="jobNotice_infoName">{name}</div>
          <div className="jobNotice_infoTitle">{title}</div>
          <div className="jobNotice_infoCondi">{condition}</div>
        </div>
      </div>
    </div>
  );
};

export default JobNotieItem;
