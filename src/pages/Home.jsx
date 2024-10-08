import CompanyList from '../components/CompanyList';
import Footer from '../components/Footer';
import GoogleTranslate from '../components/GoogleTranslate';
import Header from '../components/Header';
import QuickMenu from '../components/QuickMenu';
import RecentReview from '../components/RecentReviewList';
const Home = () => {
  return (
    <div>
      <Header />
      <GoogleTranslate />
      <QuickMenu />
      <RecentReview />
      <Footer />
    </div>
  );
};

export default Home;
