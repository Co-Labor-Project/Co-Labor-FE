import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavermapsProvider } from 'react-naver-maps';
import CompanyInfo from './pages/CompanyInfo';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import JobNotice from './pages/JobNotice';
import IegalAdvice from './pages/IegalAdvice';
import Support from './pages/Support';
import Search from './pages/Search';
function App() {
  return (
    <NavermapsProvider
      // ncpClientId="MY_NAVERMAPS_CLIENT_ID"
      ncpClientId="du60d8o1se"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CompanyInfo" element={<CompanyInfo />} />
          <Route path="/JobNotice" element={<JobNotice />} />
          <Route path="/IegalAdvice" element={<IegalAdvice />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Search/:keyword" element={<Search />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </NavermapsProvider>
  );
}

export default App;
