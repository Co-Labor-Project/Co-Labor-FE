import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyContext } from '../../App';
import { canAddReview } from '../../apis/review';
import MainTitle from '../../components/MainTitle';
import BasicInfo from './components/BasicInfo';
import JobPreview from './components/JobPreview';
import ReviewAverage from './components/ReviewAverage';
import ReviewList from './components/ReviewList';
import ReviewAddContainer from './components/ReviewAddContainer';
import { BackGroundField } from '../../components/CommonStyled';

const CompanyDetails = () => {
  const params = useParams();
  const companyContext = useContext(CompanyContext);
  const [canAdd, setCanAdd] = useState(false);
  const [write, setWrite] = useState(false);
  const [reviewAdd, setReviewAdd] = useState({
    userId: '',
    enterpriseId: '',
    title: '',
    rating: 0,
    promotionRating: 0,
    salaryRating: 0,
    balanceRating: 0,
    cultureRating: 0,
    managementRating: 0,
    pros: '',
    cons: '',
  });
  const [complteAdd, setComplteAdd] = useState(false);
  // 기업 데이터 변수 처리
  const EnterpriseData = companyContext.find(
    (company) => String(company.enterprise_id) === String(params.enterprise_id)
  );
  const fetchCanAddReview = async () => {
    const sessionType = await window.sessionStorage.getItem('userType');
    const sessionName = await window.sessionStorage.getItem('username');

    if (EnterpriseData) {
      // EnterpriseData가 존재할 때만 setReviewAdd 실행
      setReviewAdd((pre) => ({
        ...pre,
        userId: sessionName,
        enterpriseId: EnterpriseData.enterprise_id, // enterpriseId 설정
      }));
    }

    if (sessionType && sessionName) {
      const result = await canAddReview({
        type: sessionType,
        name: sessionName,
      });

      setCanAdd(result);
    }
  };

  useEffect(() => {
    if (EnterpriseData) {
      fetchCanAddReview(); // EnterpriseData가 있을 때만 실행
    }
  }, [EnterpriseData, complteAdd]); // EnterpriseData가 변경될 때만 실행
  useEffect(() => {
    fetchCanAddReview();
    // console.log('변경됐잖아!!!!!!!!!');
  }, [complteAdd]); // EnterpriseData가 변경될 때만 실행

  const addReview = () => {
    setWrite(!write);
    if (!write) {
      setReviewAdd((pre) => ({
        ...pre,
        enterpriseId: EnterpriseData.enterprise_id, // enterpriseId 다시 설정
        title: '',
        rating: 0,
        promotionRating: 0,
        salaryRating: 0,
        balanceRating: 0,
        cultureRating: 0,
        managementRating: 0,
        pros: '',
        cons: '',
      }));
    }
  };
  if (!EnterpriseData) {
    return <div>Loading...</div>; // 로딩 상태 표시
  }

  const EnterpriseImg = EnterpriseData.imageName
    ? `${import.meta.env.VITE_SERVER_URL}:8080/static/images/` +
      EnterpriseData.imageName
    : 'https://cdn-icons-png.flaticon.com/512/4091/4091968.png';

  const EnterpriseType = EnterpriseData.type || '기업 분류를 작성해주세요!';
  const EnterpriseDescription =
    EnterpriseData.description || '기업 설명을 작성해주세요!';

  return (
    <BackGroundField>
      <MainTitle text={`${EnterpriseData.name} 기본 정보`} />
      <BasicInfo
        img={EnterpriseImg}
        name={EnterpriseData.name}
        address1={EnterpriseData.address1}
        address2={EnterpriseData.address2}
        address3={EnterpriseData.address3}
        phone_number={EnterpriseData.phone_number}
        type={EnterpriseType}
        description={EnterpriseDescription}
      />
      <MainTitle text={`${EnterpriseData.name} 채용 공고`} />
      <JobPreview />
      <MainTitle text={`${EnterpriseData.name} 전체 리뷰 통계`} />
      <ReviewAverage />
      <MainTitle
        text={`${EnterpriseData.name} 리뷰`}
        isReview={true}
        isWrite={write}
        addReview={addReview}
        isLogin={canAdd} // canAdd 상태를 사용
      />
      {write && (
        <ReviewAddContainer
          reviewAdd={reviewAdd}
          setReviewAdd={setReviewAdd}
          setWrite={setWrite}
          setComplteAdd={setComplteAdd}
        />
      )}
      <ReviewList complteAdd={complteAdd} />
    </BackGroundField>
  );
};

export default CompanyDetails;
