import React, { useState } from "react";
import "./Applyforinternship.css";


const ApplyForInternship = () => {
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setApplicationData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new FormData object to send the file
      const formData = new FormData();
      formData.append("fullName", applicationData.fullName);
      formData.append("email", applicationData.email);
      formData.append("coverLetter", applicationData.coverLetter);
      formData.append("resume", applicationData.resume);

      // Make a POST request to your server to submit the application
      const response = await fetch("/api/apply-for-internship", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Application submitted successfully!");
        // Optionally, you can redirect the user to a confirmation page
      } else {
        console.error("Application submission failed.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="apply-for-internship-container">
      <h1>Apply for Internship</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={applicationData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={applicationData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume (PDF):</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={applicationData.coverLetter}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyForInternship;
