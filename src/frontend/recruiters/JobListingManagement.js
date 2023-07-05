import React from "react";
import Button from "react-bootstrap/Button";
import "./JobListingManagement.css";

const JobListingManagement = () => {
  // Sample data for job listings
  const jobListings = [
    {
      id: 1,
      position: "Software Engineer",
      company: "Company X",
      location: "City A",
    },
    // Rest of the job listings data...
  ];

  const handleEditListing = (id) => {
    // Logic for handling edit job listing functionality
  };

  const handleDeleteListing = (id) => {
    // Logic for handling delete job listing functionality
  };

  return (
    <div className="job-listing-management-container">
      <h2 className="section-title">Job Listing Management</h2>

      <ul className="job-list">
        {jobListings.map((listing) => (
          <li key={listing.id} className="job-list-item">
            <div className="job-info">
              <h3>{listing.position}</h3>
              <p>{listing.company}</p>
              <p>{listing.location}</p>
            </div>
            <div className="buttons">
              <Button
                variant="primary"
                onClick={() => handleEditListing(listing.id)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDeleteListing(listing.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListingManagement;
