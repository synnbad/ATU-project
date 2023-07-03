import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateJobListing.css";
import { addJobListing } from "../models/data";
import { toast } from "react-toastify";

const CreateJobListing = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

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

    // Show success toast
    toast.success("Job listing created successfully!");
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
