import './css/CompanyList.css';
import FilterBox from './FilterBox';
import { Location, JOB, EMPLOYMENT, OPTIONS } from './FilterOption';

const CompanyList = () => {
  return (
    <div>
      <div className="gap"></div>
      <div className="reviewTitle">🏢 기업 정보</div>
      <div className="gap"></div>

      <div className="jobNoticeFilter">
        <FilterBox option={JOB} />
        <Location />
      </div>
    </div>
  );
};

export default CompanyList;
