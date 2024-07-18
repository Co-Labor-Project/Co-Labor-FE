import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CompanyContext, JobContext, ReviewContext } from "../App";
import "./css/CompanyDetailsCenter.css";

const CompanyDetailsCenter = () => {
  const params = useParams();
  const companyContext = useContext(CompanyContext);
  const reviewContext = useContext(ReviewContext);
  const jobContext = useContext(JobContext);

  const companyData = companyContext.find(
    (company) => String(company.enterprise_id) === String(params.enterprise_id)
  );

  const reviewData = reviewContext.filter(
    (review) =>
      String(review.enterprise.enterprise_id) === String(params.enterprise_id)
  );

  const jobData = jobContext.filter(
    (job) =>
      String(job.enterprise.enterprise_id) === String(params.enterprise_id)
  );

  if (!companyData) {
    return <div>Loading</div>;
  }

  const defaultCompanyPhoto =
    "https://cdn-icons-png.flaticon.com/512/4091/4091968.png";
  const displayCompanyPhoto = companyData.photo || defaultCompanyPhoto;

  const defaultCompanyType = "기업 분류를 작성해주세요!";
  const displayCompanyType = companyData.type || defaultCompanyType;

  const defaultCompanyDescription = "기업 설명을 작성해주세요!";
  const displayCompanyDescription =
    companyData.description || defaultCompanyDescription;

  const defaultJobPhoto =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s";
  const displayJobPhoto = jobData.photo || defaultJobPhoto;

  return (
    <div>
      <br />
      <br />
      <div className="CompanyDetailsCenterCompany">
        <h1 className="title">{companyData.name} 기본 정보</h1>
        <div className="gap"></div>
        <div className="CompanyDetailsCenterCompanyBasicInfo">
          <div>
            <img
              src={displayCompanyPhoto}
              width="100px"
              alt={companyData.name}
            />
          </div>
          <div>
            주소: {companyData.address1} {companyData.address2}{" "}
            {companyData.address3}
          </div>
          <div>전화번호: {companyData.phone_number}</div>
          <div>기업 분류: {displayCompanyType}</div>
          <div>기업 설명: {displayCompanyDescription}</div>
        </div>
      </div>
      <div className="gap"></div>
      <div className="gap"></div>

      <div className="CompanyDetailsCenterJob">
        <h1 className="title">{companyData.name} 채용 공고</h1>
        <div className="gap"></div>
        <div className="CompanyDetailsCenterJobList">
          {jobData.length > 0 ? (
            jobData.map((job) => (
              <div key={job.job_id}>
                <div className="CompanyDetailsCenterJobItem">
                  <div className="CompanyDetailsCenteritemWrapper">
                    <div className="CompanyDetailsCenterjobNoticeInfo">
                      <div className="CompanyDetailsCenterjobNotice_infoTitle">
                        {job.title}
                      </div>
                      <img
                        className="CompanyDetailsCenterjobNoticeImg"
                        src={displayJobPhoto}
                        width="100px"
                        alt={jobData.title}
                      />
                      <div className="CompanyDetailsCenterjobNotice_infoCondi">
                        {job.requirement}
                      </div>
                      <div className="CompanyDetailsCenterjobNotice_infoDescription">
                        {job.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="CompanyDetailsCenterjobNotice_infoTitle">
              등록된 채용 공고가 없습니다.
            </div>
          )}
        </div>
      </div>

      <div className="gap"></div>
      <div className="gap"></div>

      <div className="CompanyDetailsCenterReview">
        <h1 className="title">{companyData.name} 리뷰</h1>
        <div className="gap"></div>
        <div className="CompanyDetailsCenterReviewList">
          {reviewData.length > 0 ? (
            reviewData.map((review) => (
              <div key={review.review_id}>
                <div className="CompanyDetailsCenterReviewItem">
                  <div className="CompanyDetailsCenteritemWrapper">
                    <h2>{review.title}</h2>
                    <div>{review.pros}</div>
                    <div>{review.cons}</div>
                    <div>평점: {review.rating}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>리뷰가 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsCenter;
