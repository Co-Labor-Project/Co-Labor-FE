import React from 'react';
import './css/JobNoticeItem.css';
import useScrollFadeIn from '../hooks/fade_in';

const JobNotieItem = ({
  id,
  photo,
  title,
  condition,
  enterprise,
  description,
}) => {
  const fadeInProps = useScrollFadeIn('up', 1);
  if (!photo) {
    photo =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s';
  }

  const name = enterprise?.name || 'No Enterprise Name';
  condition = description || condition;
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
