import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

import logo from "./logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        formData
      );

      console.log(response.data);

      // Show success toast
      toast.success("Login successful");

      // Redirect to the appropriate dashboard based on user role
      if (response.data.role === "student") {
        navigate("/StudentDashboard");
      } else if (response.data.role === "recruiter") {
        navigate("/RecruiterDashboard");
      }
    } catch (error) {
      console.error(error);

      // Show error toast
      toast.error("Invalid email or password");
    }
  };

  return (
    <div id="login">
      <img id="login-logo" src={logo} alt="logo"/>
      <h1>INTERNSHIP PLACEMENT SYSTEM</h1>

      <Form id="login-form" onSubmit={handleSubmit}>
        <Form.Group id="email-group">
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group id="password-group">
          <Form.Control
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button
          className="login-button"
          variant="primary"
          name="loginbutton"
          id="login_btn"
          type="submit"
        >
          Login
        </Button>

        <Link id="no-account" to="/CreateAccount">
            Don’t have an account? Create one
          </Link>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Login;
