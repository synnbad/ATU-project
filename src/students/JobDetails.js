import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = () => {
  const { jobId } = useParams(); // Get the job ID from the URL params

  // Define state for job details and loading/error indicators
  const [jobDetails, setJobDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job details by jobId
  useEffect(() => {
    // Replace this with your actual data fetching logic (e.g., an API request)
    // For demonstration, we'll use a setTimeout to simulate data fetching
    const fetchData = async () => {
      try {
        // Simulate an API request delay (remove this in your actual code)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Replace this with your actual data fetching logic
        const response = await fetch(`/api/jobs/${jobId}`); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();

        setJobDetails(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [jobId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!jobDetails) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <h1>Internship Details</h1>
      <h2>{jobDetails.position}</h2>
      <p>{jobDetails.company}</p>
      <p>{jobDetails.location}</p>
      <p>{jobDetails.description}</p>
    </div>
  );
};

export default JobDetails;
