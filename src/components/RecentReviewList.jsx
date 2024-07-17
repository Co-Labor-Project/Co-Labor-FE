import React from "react";
import "./css/RecentReviewList.css";
import RecentReviewItem from "./RecentReviewItem";
import "./css/common.css";
import { useContext } from "react";
import { ReviewContext } from "../App";

const RecentReview = ({ data }) => {
  const contextData = useContext(ReviewContext);

  const reviewData =
    Array.isArray(data) && data.length > 0 ? data : contextData;
  return (
    <>
      <div className="recentReview">
        <div className="title">📝 최근 리뷰</div>
        <div className="gap"></div>

        <div className="recentReviewList">
          {reviewData.map((item) => (
            <RecentReviewItem key={item.id} {...item} />
          ))}
        </div>
        <div className="gap"></div>
      </div>
    </>
  );
};

export default RecentReview;
