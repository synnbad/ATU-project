import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CreateAccount from "./Authentication/CreateAccount.js";
import Home from "./Authentication/Home.js";
import StudentDashboard from "./students/StudentDashboard.js";
import RecruiterDashboard from "./recruiters/RecruiterDashboard.js";
import Login from "./Authentication/Login.js";
import CreateJobListing from "./recruiters/CreateJobListing.js";
import Applicants from "./recruiters/Applicants.js";
import ApplyForinternship from "./students/Applyforinternship.js";
import RecruiterNotifications from "./recruiters/RecuiterNotifications.js"

import AppliedJobs from "./students/Appliedinternships.js";


import JobListingManagement from "./recruiters/JobListingManagement.js";
import StudentProfile from "./students/StudentProfile.js";


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
        <Route path="/JobListingManagement" element={<JobListingManagement />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />
        
        <Route path="/Appliedinternships" element={<AppliedJobs />} />
        <Route path="/Applyforinternships" element={<ApplyForinternship />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
