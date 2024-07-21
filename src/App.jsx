import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useEffect, useState, createContext } from "react";

import { NavermapsProvider } from "react-naver-maps";

import CompanyInfo from "./pages/CompanyInfo";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import JobNotice from "./pages/JobNotice";
import IegalAdvice from "./pages/IegalAdvice";
import Support from "./pages/Support";
import Search from "./pages/Search";
import Companydetails from "./pages/CompanyDetails";
import JobNoticeDetails from "./pages/JobNoticeDetails";
import SingIn from "./pages/SingIn";
import EnterpriseApply from "./pages/EnterpriseApply";
import JobNoticeApply from "./pages/JobNoticeApply";
export const JobContext = createContext();
export const CompanyContext = createContext();
export const LoginContext = createContext();
export const ReviewContext = createContext();
function App() {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loginState, setLoginState] = useState({
    userLogin: false,
    userEnterprise: false,
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/enterprises")
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
        // console.log(data, companies);
        // console.log("company list called");
      })
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        // console.log("jobcalled");
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/reviews/all")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <NavermapsProvider ncpClientId="du60d8o1se">
      <LoginContext.Provider value={{ loginState, setLoginState }}>
        <JobContext.Provider value={jobs}>
          <CompanyContext.Provider value={companies}>
            <ReviewContext.Provider value={reviews}>
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
                  <Route
                    path="/JobNotice/:job_id"
                    element={<JobNoticeDetails />}
                  />

                  <Route
                    path="/EnterpriseApply"
                    element={<EnterpriseApply />}
                  />
                  <Route path="/JobNoticeApply" element={<JobNoticeApply />} />
                  <Route path="*" element={<Notfound />} />
                </Routes>
              </BrowserRouter>
            </ReviewContext.Provider>
          </CompanyContext.Provider>
        </JobContext.Provider>
      </LoginContext.Provider>
    </NavermapsProvider>
  );
}

export default App;
