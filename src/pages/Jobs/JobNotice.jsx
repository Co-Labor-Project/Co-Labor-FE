import JobNoticeList from './components/JobNoticeList';
import MainTitleFilter from '../../component/MainTitleFilter';
import { BackGroundField } from '../../component/CommonStyled';

function JobNotice() {
  return (
    <BackGroundField>
      <MainTitleFilter text="📢 채용 공고" />
      <JobNoticeList />
    </BackGroundField>
  );
}

export default JobNotice;
