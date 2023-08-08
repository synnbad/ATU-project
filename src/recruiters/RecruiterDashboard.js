import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RecruiterDashboard.css";

const RecruiterDashboard = () => {
  // Sample data for job listings and applicants
  const jobListings = [
    {
      id: 1,
      company: "Vodafone Ghana",
      position: "Software Intern",
      location: "Accra",
    },
    // Rest of the job listings data...
  ];

  const applicants = [
    { id: 1, name: "John Doe", experience: "2 years" },
    // Rest of the applicants data...
  ];

  const navigate = useNavigate();

  const handleCreateListing = () => {
    navigate("/CreateJobListing"); // Replace "/create-listing" with the desired route
  };

  const handleViewApplicants = () => {
    navigate("/Applicants"); // Replace "/view-applicants" with the desired route
  };

  const handleNotificationClick = () => {
    navigate("/RecruiterNotifications"); // Replace "/notifications" with the desired route
  };

  return (
    <div className="recruiter-dashboard">
      <h1>Welcome to the Recruiter Dashboard</h1>

      <h2>Job Listings</h2>
      <ul>
        {jobListings.map((listing) => (
          <li key={listing.id}>
            <h3>{listing.position}</h3>
            <p>{listing.company}</p>
            <p>{listing.location}</p>
          </li>
        ))}
      </ul>

      <h2>Applicants</h2>
      <ul>
        {applicants.map((applicant) => (
          <li key={applicant.id}>
            <h3>{applicant.name}</h3>
            <p>Experience: {applicant.experience}</p>
          </li>
        ))}
      </ul>

      <h2>Job Listing Management</h2>
      <Button variant="primary" onClick={handleCreateListing}>
        Create Job Listing
      </Button>

      <h2>Applicant Management</h2>
      <Button variant="primary" onClick={handleViewApplicants}>
        View Applicants
      </Button>

      <h2>Notifications</h2>
      <Button variant="primary" onClick={handleNotificationClick}>
        View Notifications
      </Button>

      {/* Include other sections or features as per your project requirements */}
    </div>
  );
};

export default RecruiterDashboard;
