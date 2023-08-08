import React from "react";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const jobRecommendations = [
    {
      id: 1,
      company: "Vodafone Ghana",
      position: "Software Engineering Intern",
      location: "Madina,Accra",
    },


    // Rest of the job recommendations data...
  ];

  const appliedJobsCount = 5; // Sample data for the number of applied jobs

  return (
    <div className="container">
      <div className="dashboardContent">
        <div className="sidebar">
          <h1>Welcome to Your Student Dashboard</h1>
        </div>
        <div className="mainContent">
          <div className="section">
            <h2 className="sectionTitle">Internship Recommendations</h2>
            {jobRecommendations.map((recommendation) => (
              <div className="card" key={recommendation.id}>
                <h3 className="jobCardTitle">{recommendation.position}</h3>
                <p>{recommendation.company}</p>
                <p>{recommendation.location}</p>
                <Link to={`/job/${recommendation.id}`} className="link">
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div className="section">
            <h2 className="sectionTitle">Applied Internships</h2>
            <p className="appliedJobsCount">
              You have applied to {appliedJobsCount} jobs
            </p>
            <Link to="/applied-jobs" className="link">
              View Applied Internships
            </Link>
          </div>

          <div className="section">
            <h2 className="sectionTitle">Your Profile</h2>
            <p>View and update your profile information</p>
            <Link to="/student-profile" className="link">
              Go to Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
