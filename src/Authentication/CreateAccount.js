import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateAccount.css";
import logo from "./logo.png";

const CreateAccount = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
      role: userType, // Pass the userType to the server
      // Include additional data based on userType
      ...(userType === "student"
        ? {
            name: event.target.name.value,
            education: event.target.education.value,
            skills: event.target.skills.value,
            university: event.target.university.value,
          }
        : userType === "recruiter"
        ? {
            name: event.target.name.value,
            company: event.target.company.value,
            position: event.target.position.value,
            location: event.target.location.value,
          }
        : {}),
    };

    try {
      const response = await axios.post(
        userType === "student"
          ? "http://localhost:3001/createStudentAccount"
          : userType === "recruiter"
          ? "http://localhost:3001/createRecruiterAccount"
          : "",
        formData
      );

      // Show success toast
      toast.success("User created successfully");

      // Redirect logic based on the response data
      if (response.data.role === "student") {
        navigate("/StudentDashboard");
      } else if (response.data.role === "recruiter") {
        navigate("/RecruiterDashboard");
      }
    } catch (error) {
      console.error(error);

      // Check if error response contains a specific message
      if (error.response && error.response.data && error.response.data.message) {
        // Show error toast with specific message
        toast.error(error.response.data.message);
      } else {
        // Show generic error toast
        toast.error("An error occurred while creating the user");
      }
    }
  };

  return (
    <div className="create-account">
      <img id="login-logo" src={logo} alt="logo" />
      <div className="title-text">
        <h1>CREATE ACCOUNT</h1>
      </div>
      <Form id="login-form" onSubmit={handleSubmit}>
        <Form.Group className="user-group" id="user_type">
          <Form.Label>User Type:</Form.Label>
          <Form.Control
            as="select"
            name="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="">Select User Type</option>
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
          </Form.Control>
        </Form.Group>

        {/* Email and Password Fields */}
        <Form.Group className="email-group" id="email_id">
          <Form.Control
            type="email"
            name="email"
            id="email_id"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="password-group" id="password_id">
          <Form.Control
            type="password"
            name="password"
            id="password_id"
            placeholder="Password"
          />
        </Form.Group>

        {userType === "student" && (
          <>
            <Form.Group className="name-group" id="name_id">
              <Form.Control
                type="text"
                name="name"
                id="name_id"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="education-group" id="education_id">
              <Form.Control
                type="text"
                name="education"
                id="education_id"
                placeholder="Education"
              />
            </Form.Group>
            <Form.Group className="skills-group" id="skills_id">
              <Form.Control
                type="text"
                name="skills"
                id="skills_id"
                placeholder="Skills"
              />
            </Form.Group>
            <Form.Group className="university-group" id="university_id">
              <Form.Control
                type="text"
                name="university"
                id="university_id"
                placeholder="University"
              />
            </Form.Group>
          </>
        )}
        {userType === "recruiter" && (
          <>
            <Form.Group className="name-group" id="name_id">
              <Form.Control
                type="text"
                name="name"
                id="name_id"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="company-group" id="company_id">
              <Form.Control
                type="text"
                name="company"
                id="company_id"
                placeholder="Company"
              />
            </Form.Group>
            <Form.Group className="position-group" id="position_id">
              <Form.Control
                type="text"
                name="position"
                id="position_id"
                placeholder="Position"
              />
            </Form.Group>
            <Form.Group className="location-group" id="location_id">
              <Form.Control
                type="text"
                name="location"
                id="location_id"
                placeholder="Location"
              />
            </Form.Group>
          </>
        )}
        
        <Button
          className="signup-button"
          variant="primary"
          name="signupbutton"
          id="signup_btn"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <Link className="have-an-account" to="/login">
        Already have an account? Login
      </Link>
      <ToastContainer />
    </div>
  );
};

export default CreateAccount;
