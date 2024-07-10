import CompanyItem from './CompanyItem';
import './css/CompanyList.css';
import FilterBox from './FilterBox';
import { Location, JOB, EMPLOYMENT, OPTIONS } from './FilterOption';
const mockData = [
  {
    id: 1,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    address: '청주시',
    role: '현장직 인력',
  },
  {
    id: 2,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    address: '청주시',
    role: '현장직 인력',
  },
  {
    id: 3,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    address: '청주시',
    role: '현장직 인력',
  },
  {
    id: 4,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    address: '청주시',
    role: '현장직 인력',
  },
  {
    id: 5,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학',
    address: '청주시',
    role: '현장직 인력',
  },
  {
    id: 6,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    address: '청주시',
    role: '현장직 인력',
  },
  {
    id: 7,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    address: '청주시',
    role: '현장직 인력',
  },
  {
    id: 8,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    address: '청주시',
    role: '현장직 인력',
  },
  {
    id: 9,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    address: '청주시',
    role: '현장직 인력',
  },
];

const CompanyList = () => {
  return (
    <div>
      <div className="gap"></div>
      <div className="gap"></div>
      <div className="gap"></div>
      <div className="gap"></div>
      <div className="gap"></div>
      <div className="gap"></div>
      <div className="title">🏢 기업 정보</div>
      <div className="gap"></div>

      <div className="jobNoticeFilter">
        <FilterBox option={JOB} />
        <Location />
      </div>

      <div className="companyList">
        {mockData.map((item) => (
          <CompanyItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
