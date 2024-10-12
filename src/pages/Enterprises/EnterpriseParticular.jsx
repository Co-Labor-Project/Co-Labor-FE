import { useContext } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { BackGroundField } from '../../component/CommonStyled';
import MainTitle from '../../component/MainTitle';
import { CompanyContext, JobContext, ReviewContext } from '../../App';
import { useParams } from 'react-router-dom';
import BasicInfo from './components/BasicInfo';
import { Swiper, SwiperSlide } from 'swiper/react';
import JobPreview from './components/JobPreview';
import ReviewAverage from './components/ReviewAverage';
import ReviewList from './components/ReviewList';
const CompanyDetails = () => {
  const params = useParams();
  const companyContext = useContext(CompanyContext);
  // console.log(companyContext);

  //기업 데이터 변수 처리

  const EnterpriseData = companyContext.find(
    (company) => String(company.enterprise_id) === String(params.enterprise_id)
  );
  const EnterpriseImg = EnterpriseData.imageName
    ? `${import.meta.env.VITE_SERVER_URL}:8080/static/images/` +
      EnterpriseData.imageName
    : 'https://cdn-icons-png.flaticon.com/512/4091/4091968.png';

  const EnterpriseType = EnterpriseData.type || '기업 분류를 작성해주세요!';

  const EnterpriseDescripton =
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
        description={EnterpriseDescripton}
      />
      <MainTitle text={`${EnterpriseData.name} 채용 공고`} />
      <JobPreview />
      <MainTitle text={`${EnterpriseData.name} 전체 리뷰 통계`} />
      <ReviewAverage />
      <MainTitle text={`${EnterpriseData.name} 리뷰`} />
      <ReviewList />
    </BackGroundField>
  );
};

export default CompanyDetails;
