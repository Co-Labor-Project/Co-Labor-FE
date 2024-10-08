import CompanyList from '../../components/CompanyList';
import Footer from '../../components/Footer';
import GoogleTranslate from '../../components/GoogleTranslate';
import Header from '../../component/Header';
import QuickMenu from '../../components/QuickMenu';
import RecentReview from '../../components/RecentReviewList';
const Home = () => {
  return (
    <>
      <GoogleTranslate />
      <QuickMenu />
      <RecentReview />
    </>
  );
};

export default Home;
