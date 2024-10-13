import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { JobContext, CompanyContext } from '../../App';
import JobNotieItem from './components/JobNotieItem';
import MainTitle from '../../component/MainTitle';
import styled from 'styled-components';
import { BackGroundField } from '../../component/CommonStyled';
import BasicInfo from '../Enterprises/components/BasicInfo';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const JobNoticeDetailsCenter = () => {
  const params = useParams();
  const contextData = useContext(JobContext);
  const companyContext = useContext(CompanyContext);
  const jobId = params.job_id;
  const nav = useNavigate();

  const [jobData, setJobData] = useState(null);
  const [EnterpriseData, setEnterpriseData] = useState(null);
  const [displayJobPhoto, setDisplayJobPhoto] = useState('');
  const [relationData, setRelationData] = useState([]); // relationData 상태 추가

  useEffect(() => {
    const job = contextData.find(
      (item) => String(item.job_id) === String(jobId)
    );
    if (job) {
      setJobData(job);
      const company = companyContext.find(
        (item) =>
          String(item.enterprise_id) === String(job.enterprise.enterprise_id)
      );
      setEnterpriseData(company);

      if (job.imageName) {
        const checkImage = async () => {
          const url = `${import.meta.env.VITE_SERVER_URL}:8080/static/images/${
            job.imageName
          }`;
          try {
            const response = await fetch(url);
            if (response.ok) {
              setDisplayJobPhoto(url);
            } else if (response.status === 404) {
              const fallbackUrl = `/api/jobs/images/${job.imageName}`;
              const fallbackResponse = await fetch(fallbackUrl);
              if (fallbackResponse.ok) {
                setDisplayJobPhoto(fallbackUrl);
              } else {
                setDisplayJobPhoto(
                  `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s`
                );
              }
            }
          } catch (error) {
            console.error('Error fetching image:', error);
            setDisplayJobPhoto(
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s'
            );
          }
        };

        setDisplayJobPhoto(''); // 초기화하여 이전 이미지가 남지 않도록 함
        checkImage();
      } else {
        setDisplayJobPhoto(
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gn8yBWZsQEVzdXIx-qFWrYYlphEWWnG4Og&s'
        );
      }
    }
  }, [jobId, contextData, companyContext]);

  // relationData를 업데이트하는 useEffect 추가
  useEffect(() => {
    if (jobData) {
      const filteredData = contextData
        .filter((item) => item.jobRole === jobData.jobRole)
        .slice(0, 10);
      setRelationData(filteredData); // relationData 업데이트
      console.log('relationData', relationData);
      console.log('relationData', relationData);
    }
  }, [jobData, contextData]); // jobData 또는 EnterpriseData가 변경될 때마다 실행

  if (!jobData || !EnterpriseData) {
    return <div>Loading</div>;
  }

  const EnterpriseImg = EnterpriseData.imageName
    ? `${import.meta.env.VITE_SERVER_URL}:8080/static/images/${
        EnterpriseData.imageName
      }`
    : 'https://cdn-icons-png.flaticon.com/512/4091/4091968.png';

  const EnterpriseDescripton =
    EnterpriseData.description || '기업 설명을 작성해주세요!';
  const highlightWords = [
    '우대사항',
    '채용 절차',
    '자격 요건',
    '채용절차 ',
    ' 간편 접수',
    '1차 인터뷰',
    '2차 인터뷰',
    '최종합격 ',
    '업무환경 ',
    '복지혜택 ',
    '핵심업무 ',
    '조직 소개',
    '팀 메시지',
    '복지혜택',
    '복지 및 혜택',
    '핵심업무',
  ];

  const applyHighlighting = (text) => {
    if (!text) return ''; // description이 null 또는 undefined인 경우 빈 문자열 반환
    let highlightedText = text;
    highlightWords.forEach((word) => {
      const regex = new RegExp(word, 'g');
      highlightedText = highlightedText.replace(regex, `<b>${word}</b>`);
    });
    return highlightedText;
  };
  const descriptionWithHighlights = applyHighlighting(jobData.description);

  return (
    <BackGroundField>
      <MainTitle text={EnterpriseData.name} />
      <BasicInfo
        img={EnterpriseImg}
        name={EnterpriseData.name}
        address1={EnterpriseData.address1}
        address2={EnterpriseData.address2}
        address3={EnterpriseData.address3}
        phone_number={EnterpriseData.phone_number}
        type={EnterpriseData.type || '기업 분류를 작성해주세요!'}
        description={EnterpriseDescripton}
      />

      <MainTitle text={jobData.title} />

      <Container>
        <DetailsImg src={displayJobPhoto} alt={jobData.title} />
        <DetailsCondition>
          <DetailKey>
            <p>마감 기한</p> <span>{jobData.deadDate}</span>
          </DetailKey>

          <DetailKey>
            <p>연락처</p> <span>{jobData.enterpriseUser.email}</span>
          </DetailKey>
          <DetailKey>
            <p>직무 </p> <span>{jobData.jobRole}</span>
          </DetailKey>
          <DetailKey>
            <p>경력 </p>
            <span>{jobData.experience}</span>
          </DetailKey>
          <DetailKey>
            <p>고용형태 </p> <span>{jobData.employmentType}</span>
          </DetailKey>
          <DetailKey>
            <p>근무지역 </p>
            <span>{jobData.location}</span>
          </DetailKey>
          <DetailKey>
            <p>스킬 </p>
            <span>{jobData.skills}</span>
          </DetailKey>
        </DetailsCondition>
      </Container>

      <div className="JobDetailsdescription">
        <pre dangerouslySetInnerHTML={{ __html: descriptionWithHighlights }} />
      </div>
      <MainTitle text="연관된 공고" />

      <Container>
        <SwiperWrapper>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={-40}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            height={3000}
            width={900}
          >
            {relationData.map((item) => (
              <SwiperSlide key={item.job_id}>
                <JobNotieItem {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </Container>
    </BackGroundField>
  );
};

export default JobNoticeDetailsCenter;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  justify-content: start;
  gap: 170px;
  padding-left: 20px;
`;
const DetailsCondition = styled.div`
  padding: 18px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: all 0.1s;
  max-width: 550px;
  flex: 2;
  line-height: 35px;
`;

const DetailKey = styled.div`
  display: flex;

  & > p {
    width: 90px;
    margin-right: 20px;
    font-size: 17px;
    font-weight: 550;
  }
`;

const DetailsImg = styled.img`
  max-width: 400px;
  max-height: 400px;
  flex: 1;
`;
const SwiperWrapper = styled.div`
  max-width: 800px;
  display: block;
`;
