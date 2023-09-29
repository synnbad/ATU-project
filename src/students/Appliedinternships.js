import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css";
import "./Appliedinternships.css";

const AppliedJobs = () => {
  const appliedJobs = [
    {
      id: 1,
      position: "Software Engineering Intern",
      company: "Vodafone Ghana",
      location: "Madina, Accra",
    },
    // Add more applied job data here...
  ];

  const handleJobClick = (job) => {
    // Display a toast when an internship is clicked
    toast.info(`Clicked on: ${job.position}`);
  };

  return (
    <div>
      <h1>Applied Internships</h1>
      <ul>
        {appliedJobs.map((job) => (
          <li key={job.id}>
            <h2 onClick={() => handleJobClick(job)}>{job.position}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <Link to={`/job/${job.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
