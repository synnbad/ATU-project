import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateAccount.css";

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
      role: userType, // Fix: Add role property
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/Users",
        formData
      );

      console.log(response.data);

      // Show success toast
      toast.success("User created successfully");

      // Redirect to the appropriate dashboard based on user role
      if (response.data.role === "student") {
        navigate("/student-dashboard");
      } else if (response.data.role === "recruiter") {
        navigate("/recruiter-dashboard");
      }
    } catch (error) {
      console.error(error);

      // Check if error response contains a specific message
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
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
      <img className="logo-icon" alt="" src="/logo@2x.png" />
      <div className="title-text">CREATE ACCOUNT</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="email-box-formgroup" id="email_id">
          <Form.Control
            type="email"
            name="email"
            id="email_id"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="password-box-formgroup" id="password_box">
          <Form.Control
            type="password"
            name="password"
            id="password_box"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="user-type-formgroup" id="user_type">
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
      <ToastContainer /> {/* Add this line to render the toast container */}
    </div>
  );
};

export default CreateAccount;
