import CompanyList from '../Enterprises/components/EnterprisesList';
import Footer from '../../component/Footer';
import TranslateList from '../../component/TranslateList';
import Header from '../../component/Header';
import QuickMenu from '../../components/QuickMenu';
import RecentReview from '../../components/RecentReviewList';
import styled from 'styled-components';
const Home = () => {
  return (
    <>
      <TraslateButton>
        <TranslateList />
      </TraslateButton>

      <QuickMenu />
      <RecentReview />
    </>
  );
};

export default Home;

const TraslateButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;
