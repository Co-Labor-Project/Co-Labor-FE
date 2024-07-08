import CompanyList from '../components/CompanyList';
import Header from '../components/Header';
import JobNoticeList from '../components/JobNoticeList';
import RecentReview from '../components/RecentReview';
import Footer from '../components/Footer';
function JobNotice() {
  return (
    <div>
      <Header />
      <JobNoticeList />
      <Footer />
    </div>
  );
}

export default JobNotice;
