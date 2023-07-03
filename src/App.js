import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Home from "./components/Authentication/Home";
import StudentDashboard from "./students/StudentDashboard";
import RecruiterDashboard from "./recruiters/RecruiterDashboard";
import Login from "./components/Login/Login";
import CreateJobListing from "./recruiters/CreateJobListing";
import Applicants from "./recruiters/Applicants";
import RecruiterNotifications from "./recruiters/RecuiterNotifications"
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const titleMap = {
    "/": "Home",
    "/CreateAccount": "Create Account",
    "/StudentDashboard": "Student Dashboard",
    "/RecruiterDashboard": "Recruiter Dashboard",
    // Add more routes as needed
  };

  const metaDescriptionMap = {
    "/": "Welcome to the Internship Placement System!",
    "/CreateAccount": "Create a new account.",
    "/StudentDashboard": "Dashboard for students",
    "/RecruiterDashboard": "Dashboard for recruiters",
    // Add more routes as needed
  };

  const title = titleMap[location.pathname] || "";
  const metaDescription = metaDescriptionMap[location.pathname] || "";

  useEffect(() => {
    document.title = title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [location.pathname, title, metaDescription]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/RecruiterDashboard" element={<RecruiterDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CreateJobListing" element={<CreateJobListing />} />
        <Route path="/Applicants" element={<Applicants />} />
        <Route path="/RecruiterNotifications" element={<RecruiterNotifications />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
