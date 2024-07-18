import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import useScrollFadeIn from "../hooks/fade_in";
import { CompanyContext, ReviewContext } from "../App";
import "./css/CompanyDetailsCenter.css";
import "./css/RecentReviewList.css";
import "./css/RecentReviewItem.css";

const CompanyDetailsCenter = () => {
  const params = useParams();
  const contextData = useContext(CompanyContext);
  const fadeInProps = useScrollFadeIn("up", 1);

  const companyData = contextData.find(
    (item) => String(item.enterprise_id) === String(params.enterprise_id)
  );

  const reviewData = useContext(ReviewContext).filter(
    (review) =>
      String(review.enterprise.enterprise_id) === String(params.enterprise_id)
  );

  if (!companyData) {
    return <div>잘못된 페이지 접근입니다.</div>;
  }

  const defaultPhoto =
    "https://cdn-icons-png.flaticon.com/512/4091/4091968.png";
  const displayedPhoto = companyData.photo || defaultPhoto;

  const defaultType = "기업 분류를 작성해주세요!";
  const displayType = companyData.type || defaultType;

  const defaultDescription = "기업 설명을 작성해주세요!";
  const displayDescription = companyData.description || defaultDescription;

  return (
    <div>
      <h1>기업 상세 정보 페이지</h1>
      <div>
        주소: {companyData.address1} {companyData.address2}{" "}
        {companyData.address3}
      </div>
      <div>이름: {companyData.name}</div>
      <div>
        <img src={displayedPhoto} width="100px" alt={name} />
      </div>
      <div>기업 분류: {displayType}</div>
      <div>기업 설명: {displayDescription}</div>
      <div>전화번호: {companyData.phone_number}</div>
      <br />
      <br />
      <br />

      {/* 리뷰 데이터 평점 평균 및 시각화 그래프 */}

      <div className="recentReview">
        <h1 className="title">{companyData.name} 리뷰 보기</h1>
        <div className="recentReviewList">
          {reviewData.length > 0 ? (
            reviewData.map((review) => (
              <div key={review.review_id} className="recentReviewItem">
                <div {...fadeInProps}>
                  <div className="itemWrapper">
                    <h2>{review.title}</h2>
                    <p>{review.pros}</p>
                    <p>{review.cons}</p>
                    <p>평점: {review.rating}</p>
                    <p>작성일: {review.created_at}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>리뷰가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsCenter;
