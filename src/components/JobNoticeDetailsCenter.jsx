// // components/JobNoticeDetailsCenter.jsx
// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { JobContext } from "../App";
// import "./css/JobNoticeDetailsCenter.css";
// import "./css/common.css";

// const JobNoticeDetailsCenter = () => {
//   const params = useParams();
//   const contextData = useContext(JobContext);
//   const jobId = params.job_id;

//   const jobData = contextData.find(
//     (item) => String(item.job_id) === String(jobId)
//   );

//   if (!jobData) {
//     return <div>Loading</div>;
//   }

//   const displayJobPhoto =
//     jobData.imageName ||
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s";

//   // const bold = "조직 소개";
//   // if (jobData.description.includes(bold)) {
//   //   const tmp = new RegExp(bold, "g");
//   //   jobData.description.replace(tmp, "<b>" + bold + "</b>");
//   // }
//   return (
//     <div className="JobDetail">
//       <div className="gap2" />
//       <h1 className="title">{jobData.title}</h1>
//       <div className="gap" />
//       <div className="JobDetailsBasicInfo">
//         <img
//           className="JobDetailsImg"
//           src={displayJobPhoto}
//           alt={jobData.title}
//         />
//         <div className="JobNDetailsCondi">
//           <div className="JobDetailKey">
//             <section>마감 기한:</section> {jobData.deadDate}
//           </div>
//           <div className="JobDetailKey">
//             <section>조건: </section>
//             {jobData.requirement}
//           </div>
//           <div className="JobDetailKey">
//             <section>연락처:</section> {jobData.enterpriseUser.email}
//           </div>
//           <div className="JobDetailKey">
//             <section>직무 :</section> {jobData.jobRole}
//           </div>
//           <div className="JobDetailKey">
//             <section>경력 : </section>
//             {jobData.experience}
//           </div>
//           <div className="JobDetailKey">
//             <section>고용형태 :</section> {jobData.employmentType}
//           </div>
//           <div className="JobDetailKey">
//             <section>근무지역 : </section>
//             {jobData.location}
//           </div>
//           <div className="JobDetailKey">
//             <section>스킬 : </section>
//             {jobData.skills}
//           </div>
//         </div>
//       </div>
//       <hr />
//       <div className="JobDetailsdescription">
//         <pre>{jobData.description}</pre>
//       </div>
//     </div>
//   );
// };

// export default JobNoticeDetailsCenter;
import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JobContext, CompanyContext } from "../App";
import JobNotieItem from "./JobNotieItem";
import "./css/JobNoticeDetailsCenter.css";
import "./css/common.css";

const JobNoticeDetailsCenter = () => {
  const params = useParams();
  const contextData = useContext(JobContext);
  const companyContext = useContext(CompanyContext);
  const jobId = params.job_id;
  const nav = useNavigate();
  // const jobArr = Array.isArray(contextData);

  let jobData = contextData.find(
    (item) => String(item.job_id) === String(jobId)
  );

  let companyData = companyContext.find(
    (item) =>
      String(item.enterprise_id) === String(jobData.enterprise.enterprise_id)
  );

  useEffect(() => {
    jobData = contextData.find((item) => String(item.job_id) === String(jobId));
    companyData = companyContext.find(
      (item) =>
        String(item.enterprise_id) === String(jobData.enterprise.enterprise_id)
    );
  }, []);

  if (!jobData) {
    return <div>Loading</div>;
  }

  const displayJobPhoto =
    "http://localhost:8080/static/images/" + jobData.imageName ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s";

  // const displayCompanyPhoto =
  //   "http://localhost:8080/static/images/" + companyData.imageName ||
  //   "https://cdn-icons-png.flaticon.com/512/4091/4091968.png";
  const displayCompanyPhoto = companyData.imageName
    ? `http://localhost:8080/static/images/${companyData.imageName}`
    : "https://cdn-icons-png.flaticon.com/512/4091/4091968.png";

  const defaultCompanyType = "기업 분류를 작성해주세요!";
  const displayCompanyType = companyData.type || defaultCompanyType;

  const defaultCompanyDescription = "기업 설명을 작성해주세요!";
  const displayCompanyDescription =
    companyData.description || defaultCompanyDescription;

  // "우대사항"을 bold체로 변경
  // const descriptionWithBold = jobData.description.replace(
  //   /우대사항/g,
  //   '<b>우대사항</b>'
  // );
  const highlightWords = [
    "우대사항",
    "채용 절차",
    "자격 요건",
    "채용절차 ",
    " 간편 접수",
    "1차 인터뷰",
    "2차 인터뷰",
    "최종합격 ",
    "업무환경 ",
    "복지혜택 ",
    "핵심업무 ",
    "조직 소개",
    "팀 메시지",
    "복지혜택",
    "복지 및 혜택",
    "핵심업무",
  ];

  const applyHighlighting = (text) => {
    let highlightedText = text;
    highlightWords.forEach((word) => {
      const regex = new RegExp(word, "g");
      highlightedText = highlightedText.replace(regex, `<b>${word}</b>`);
    });
    return highlightedText;
  };
  const descriptionWithHighlights = applyHighlighting(jobData.description);

  return (
    <div className="JobDetail">
      <div className="gap2"></div>
      <div className="CompanyDetail">
        <h1 className="title">{companyData.name}</h1>
        <div className="gap" />
        <div className="JobDetailsBasicInfo">
          <img
            className="JobCompanyImg"
            src={displayCompanyPhoto}
            alt={companyData.title}
          />
          <div className="JobNDetailsCondi">
            <div className="JobDetailKey">
              <p>주소 </p>{" "}
              <span>
                {companyData.address1} {companyData.address2}{" "}
                {companyData.address3}
              </span>
            </div>
            <div className="JobDetailKey">
              <p>전화번호</p> <span>{companyData.phone_number}</span>
            </div>
            <div className="JobDetailKey">
              <p>기업분류 </p> <span>{displayCompanyType}</span>
            </div>
            <div className="JobDetailKey">
              <p>기업설명 </p>
              <span>{displayCompanyDescription}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <h1 className="title">{jobData.title}</h1>
      <div className="gap" />
      <div className="JobDetailsBasicInfo">
        <img
          className="JobDetailsImg"
          src={displayJobPhoto}
          alt={jobData.title}
        />
        <div className="JobNDetailsCondi">
          <div className="JobDetailKey">
            <p>마감 기한</p> <span>{jobData.deadDate}</span>
          </div>
          <div className="JobDetailKey">
            <p>조건 </p>
            {jobData.requirement}
          </div>
          <div className="JobDetailKey">
            <p>연락처</p> <span>{jobData.enterpriseUser.email}</span>
          </div>
          <div className="JobDetailKey">
            <p>직무 </p> <span>{jobData.jobRole}</span>
          </div>
          <div className="JobDetailKey">
            <p>경력 </p>
            <span>{jobData.experience}</span>
          </div>
          <div className="JobDetailKey">
            <p>고용형태 </p> <span>{jobData.employmentType}</span>
          </div>
          <div className="JobDetailKey">
            <p>근무지역 </p>
            <span>{jobData.location}</span>
          </div>
          <div className="JobDetailKey">
            <p>스킬 </p>
            <span>{jobData.skills}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="JobDetailsdescription">
        <pre dangerouslySetInnerHTML={{ __html: descriptionWithHighlights }} />
      </div>
      <div className="gap2" />
      <h1 className="title">연관된 공고</h1>
      <div className="gap" />

      <div className="JobDetailsBasicInfo">
        <div className="JobNoticeList">
          {contextData.map((item) => (
            <JobNotieItem key={item.job_id} {...item} />
          ))}
        </div>
      </div>
      <div className="gap" />
    </div>
  );
};

export default JobNoticeDetailsCenter;
