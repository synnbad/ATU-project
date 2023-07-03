import React from "react";
import Button from "react-bootstrap/Button";
import "./StudentJobListings.css";

const StudentJobListings = () => {
  // Sample data for job listings
  const jobListings = [
    {
      id: 1,
      company: "Company X",
      position: "Software Engineer",
      location: "City A",
    },
    // Rest of the job listings data...
  ];

  const handleApply = (id) => {
    // Logic for applying to a job listing
    console.log("Applied to job listing with ID:", id);
  };

  return (
    <div className="student-job-listings">
      <h1>Job Listings</h1>

      <ul className="job-list">
        {jobListings.map((listing) => (
          <li key={listing.id}>
            <h3>{listing.position}</h3>
            <p>{listing.company}</p>
            <p>{listing.location}</p>
            <Button
              variant="primary"
              onClick={() => handleApply(listing.id)}
            >
              Apply
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentJobListings;
