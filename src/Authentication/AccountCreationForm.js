import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./AccountCreationForm.css";

const AccountCreationForm = ({ userType, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [university, setUniversity] = useState("");
  const [level, setLevel] = useState("");
  const [residence, setResidence] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };

  const handleResumeChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setLevel(event.target.value);
  };

  const handlePositionChange = (event) => {
    setResidence(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      education,
      skills,
      university,
      level,
      residence,
    };

    try {
      await axios.post(
        userType === "student"
          ? "http://localhost:3001/createStudentAccount"
          : "http://localhost:3001/createRecruiterAccount",
        formData
      );

      // Handle successful account creation
      console.log("Account created successfully!");
      // Call the onSubmit prop to handle any additional logic in the parent component
      onSubmit();
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </Form.Group>
      {userType === "student" && (
        <Form.Group controlId="education">
          <Form.Label>Education</Form.Label>
          <Form.Control
            type="text"
            value={education}
            onChange={handleEducationChange}
            required
          />
        </Form.Group>
      )}
      {userType === "student" && (
        <Form.Group controlId="skills">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            type="text"
            value={skills}
            onChange={handleSkillsChange}
            required
          />
        </Form.Group>
      
      )}
      {userType === "student" && (
        <Form.Group controlId="Level">
          <Form.Label>University</Form.Label>
          <Form.Control
            type="text"
            value={university}
            onChange={handleResumeChange}
            required
          />
        </Form.Group>
        
      )}
      {userType === "recruiter" && (
        <Form.Group controlId="Location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            value={level}
            onChange={handleCompanyChange}
            required
          />
        </Form.Group>
        
      )}
      {userType === "recruiter" && (
        <Form.Group controlId="residence">
          <Form.Label>Residence</Form.Label>
          <Form.Control
            type="text"
            value={residence}
            onChange={handlePositionChange}
            required
          />
        </Form.Group>
        
      )}
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Create Account
      </Button>
    </div>
  );
};

export default AccountCreationForm;