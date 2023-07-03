import React from "react";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

const StudentDashboard = () => {
  const jobRecommendations = [
    {
      id: 1,
      company: "Company X",
      position: "Software Engineer",
      location: "City A",
    },
    // Rest of the job recommendations data...
  ];

  const appliedJobsCount = 5; // Sample data for the number of applied jobs

  return (
    <div className="student-dashboard">
      <Navbar />

      <div className="dashboard-content">
        <Sidebar />

        <div className="main-content">
          <h1>Welcome to Your Student Dashboard</h1>

          <div className="job-recommendations">
            <h2>Job Recommendations</h2>
            {jobRecommendations.map((recommendation) => (
              <div className="job-card" key={recommendation.id}>
                <h3>{recommendation.position}</h3>
                <p>{recommendation.company}</p>
                <p>{recommendation.location}</p>
                <Link to={`/job/${recommendation.id}`}>View Details</Link>
              </div>
            ))}
          </div>

          <div className="applied-jobs">
            <h2>Applied Jobs</h2>
            <p>You have applied to {appliedJobsCount} jobs</p>
            <Link to="/applied-jobs">View Applied Jobs</Link>
          </div>

          <div className="profile">
            <h2>Your Profile</h2>
            <p>View and update your profile information</p>
            <Link to="/student-profile">Go to Profile</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
