import React from 'react';
import './css/RecentReviewItem.css';
const RecentReviewItem = ({ id, company, comment, info, rating, link }) => {
  return (
    <div>
      <h5>{company}</h5>
      <div className="itemWrapper">
        <div>
          <h2>"</h2>
          {comment}
          <h2>"</h2>
        </div>

        <div>{info}</div>
        <div>{rating}</div>
        <div>{link}</div>
      </div>
    </div>
  );
};

export default RecentReviewItem;
