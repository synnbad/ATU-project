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

  // Handle the internship application
  const applyForInternship = (jobId) => {
    // Implement your logic to apply for an internship here.
    // This can include making an API request to submit the application.
    // You can display a success message or handle errors as needed.
    console.log(`Applied for internship with ID: ${jobId}`);
  };

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
                <button
                  onClick={() => applyForInternship(recommendation.id)}
                  className="link" 
                ><Link to="/Applyforinternships" className="applyforinternships">
                Apply For Internships
              </Link>
                  
                </button>
              </div>
            ))}
          </div>

          <div className="section">
            <h2 className="sectionTitle">Applied Internships</h2>
            <p className="appliedJobsCount">
              You have applied to {appliedJobsCount} jobs
            </p>
            <Link to="/Appliedinternships" className="link">
              View Applied Internships
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
