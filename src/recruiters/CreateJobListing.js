import React, { useState } from "react";
import "./CreateJobListing.css";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const CreateJobListing = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const addJobListing = async (newJobListing) => {
    try {
      // Make an API request to store the new job listing
      const response = await axios.post("/joblistings", newJobListing);
      
      // Handle the response or perform any necessary actions
      console.log(response.data); // Assuming the response contains the saved job listing
      
      // Show success toast
      toast.success("Job listing created successfully!");
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error(error);
      toast.error("Failed to create job listing. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJobListing = {
      position,
      company,
      location,
    };
    addJobListing(newJobListing);

    // Reset form fields
    setPosition("");
    setCompany("");
    setLocation("");
  };

  return (
    <div className="create-job-listing-container">
      <h2>Create Job Listing</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="position">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateJobListing;
