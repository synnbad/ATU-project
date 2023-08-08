import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateAccount.css";
import logo from "./logo.png";
import AccountCreationForm from "./AccountCreationForm.js";

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
    };
  
    try {
      let response;
      if (userType === "student") {
        response = await axios.post("http://localhost:3001/createStudentAccount", formData);
      } else if (userType === "recruiter") {
        response = await axios.post("http://localhost:3001/createRecruiterAccount", formData);
      }
  
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
        <Form.Group className="email-group" id="email_id">
          <Form.Control
            type="email"
            name="email"
            id="email_id"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="password-group" id="password_box">
          <Form.Control
            type="password"
            name="password"
            id="password_box"
            placeholder="Password"
          />
        </Form.Group>
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
        {userType && <AccountCreationForm userType={userType} />}
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
