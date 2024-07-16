import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavermapsProvider } from 'react-naver-maps';
import CompanyInfo from './pages/CompanyInfo';
import { createContext } from 'react';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import JobNotice from './pages/JobNotice';
import IegalAdvice from './pages/IegalAdvice';
import Support from './pages/Support';
import Search from './pages/Search';
import Companydetails from './pages/CompanyDetails';
import JobNoticeDetails from './pages/JobNoticeDetails';
import SingIn from './pages/SingIn';
import EnterpriseApply from './pages/EnterpriseApply';
export const JobContext = createContext();
export const CompanyContext = createContext();
const mockJobData = [
  {
    job_id: 1,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',

    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    enterprise: { name: '(주) pat & mat' },
  },
  {
    job_id: 2,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    enterprise: { name: '(주) pat & mat' },
  },
  {
    job_id: 3,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    enterprise: { name: '(주) pat & mat' },
  },
  {
    job_id: 4,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    enterprise: { name: '(주) pat & mat' },
  },
  {
    job_id: 5,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
    title: '패트와 매트',
    condition: '4년제 대학',
    enterprise: { name: '(주) pat & mat' },
  },
  {
    job_id: 6,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    enterprise: { name: '(주) pat & mat' },
  },
  {
    job_id: 7,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    enterprise: { name: '(주) pat & mat' },
  },
  {
    job_id: 8,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    enterprise: { name: '(주) pat & mat' },
  },
  {
    job_id: 9,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    enterprise: { name: '(주) pat & mat' },
  },
];
const mockCompanyData = [
  {
    id: 1,
    photo:
      'https://i.namu.wiki/i/os1p_saAg0g1bwlA5nKw9DUk_qGCJOtAC5gygZolo66jeAdP_yNyoARSQdzKb_yIFLL9bwhXtFuMSfoWQ9Gzmw.svg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
    address: '청주시',
    role: '현장직 인력',
    enterprise_id: '1',
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
    enterprise_id: '1119',
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
    enterprise_id: '11118',
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
    enterprise_id: '1112',
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
    enterprise_id: '1113',
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
    enterprise_id: '1114',
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
    enterprise_id: '1115',
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
    enterprise_id: '1116',
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
    enterprise_id: '1117',
  },
];
function App() {
  return (
    <NavermapsProvider
      // ncpClientId="MY_NAVERMAPS_CLIENT_ID"
      ncpClientId="du60d8o1se"
    >
      <JobContext.Provider value={mockJobData}>
        <CompanyContext.Provider value={mockCompanyData}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CompanyInfo" element={<CompanyInfo />} />
              <Route path="/JobNotice" element={<JobNotice />} />
              <Route path="/IegalAdvice" element={<IegalAdvice />} />
              <Route path="/Support" element={<Support />} />
              <Route path="/SingIn" element={<SingIn />} />
              <Route path="/Search/:keyword" element={<Search />} />
              <Route path="/AiSearch/:keyword" element={<Search />} />
              <Route
                path="/Search/:keyword/:enterprise_id"
                element={<Companydetails />}
              />
              <Route
                path="/CompanyInfo/:enterprise_id"
                element={<Companydetails />}
              />
              <Route
                path="/Search/:keyword/jobNotice/:job_id"
                element={<JobNoticeDetails />}
              />
              <Route path="/JobNotice/:job_id" element={<JobNoticeDetails />} />
              <Route path="/EnterpriseApply" element={<EnterpriseApply />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </BrowserRouter>
        </CompanyContext.Provider>
      </JobContext.Provider>
    </NavermapsProvider>
  );
}

export default App;
