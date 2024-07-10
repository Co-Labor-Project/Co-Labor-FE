import React from 'react';
import './css/RecentReviewItem.css';
import useScrollFadeIn from '../hooks/fade_in';

const RecentReviewItem = ({
  id,
  company,
  comment,
  info,
  rating,
  link,
  photo,
}) => {
  const fadeInProps = useScrollFadeIn('up', 1);
  return (
    <div className="recentReviewItem">
      <div {...fadeInProps}>
        <h5>
          <img src={photo} width="30" height="30" />
          {company}
        </h5>
        <div className="itemWrapper">
          <div>
            <h2>&quot;{comment} &quot;</h2>
          </div>
          <div className="info">
            <div>{info}</div>
            <div>{rating}</div>
            <div>{link}</div>
          </div>
          <div className="moreBtn"> 리뷰 더 확인하기 </div>
        </div>
      </div>
    </div>
  );
};

export default RecentReviewItem;
