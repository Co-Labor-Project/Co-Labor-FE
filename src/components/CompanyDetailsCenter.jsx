import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  const displayJobPhoto = (job) => job.photo || defaultJobPhoto;

  return (
    <div className="CompanyDetail">
      <br />
      <br />
      <div className="CompanyDetailsCenterCompany">
        <h1 className="title">{companyData.name} 기본 정보</h1>
        <div className="gap"></div>
        <div className="CompanyDetailsCenterCompanyBasicInfo">
          <div className="CompanyDetailsCenterCompanyImgContainer">
            <img
              className="CompanyDetailsCenterCompanyImg"
              src={displayCompanyPhoto}
              alt={companyData.name}
            />
          </div>
          <div className="CompanyDetailsCenterCompanyTextContainer">
            <div className="CompanyDetailsCenterCompanyText">
              <div className="CompanyDetailsCenterCompanyAddress">
                주소: {companyData.address1} {companyData.address2}{" "}
                {companyData.address3}
              </div>
              <div className="CompanyDetailsCenterCompanyPh">
                전화번호: {companyData.phone_number}
              </div>
              <div className="CompanyDetailsCenterCompanyType">
                기업 분류: {displayCompanyType}
              </div>
              <div className="CompanyDetailsCenterCompanyDes">
                기업 설명: {displayCompanyDescription}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gap"></div>
      <div className="gap2"></div>

      <div className="CompanyDetailsCenterJob">
        <h1 className="title">{companyData.name} 채용 공고</h1>
        <div className="gap2"></div>
        <div className="CompanyDetailsCenterJobList">
          {jobData.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={-110}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              {jobData.map((job) => (
                <SwiperSlide key={job.job_id}>
                  <div className="CompanyDetailsCenterJobItem">
                    <div className="CompanyDetailsCenteritemWrapper">
                      <div className="CompanyDetailsCenterjobNoticeInfo">
                        <div className="CompanyDetailsCenterjobNotice_infoTitle">
                          {job.title}
                        </div>
                        <img
                          className="CompanyDetailsCenterjobNoticeImg"
                          src={displayJobPhoto(job)}
                          width="100px"
                          alt={job.title}
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
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="CompanyDetailsCenterjobNotice_infoTitle">
              등록된 채용 공고가 없습니다.
            </div>
          )}
        </div>
      </div>

      <div className="CompanyDetailsCenterReview">
        <h1 className="title">{companyData.name} 리뷰</h1>
        <div className="gap"></div>
        <div className="CompanyDetailsCenterReviewList">
          {reviewData.length > 0 ? (
            reviewData.map((review) => (
              <div key={review.review_id}>
                <div className="CompanyDetailsCenterReviewitemWrapper">
                  <h5>{review.title}</h5>
                  <div className="CompanyDetailsCenterReviewInfo">
                    <div>평점 : {review.rating}</div>
                    <div>승진 기회 및 개인 성장 가능성</div>
                    <div>{review.promotion_rating}</div>
                    <div>복지 및 급여</div>
                    <div>{review.salary_rating}</div>
                    <div>업무와 삶의 균형</div>
                    <div>{review.balance_rating}</div>
                    <div>사내 문화 평가 점수</div>
                    <div>{review.culture_rating}</div>
                    <div>경영진 관련 평가 점수</div>
                    <div>{review.management_rating}</div>
                    <div>장점</div>
                    <div>{review.pros}</div>
                    <div>단점</div>
                    <div>{review.cons}</div>
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
