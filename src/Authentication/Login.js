import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

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
      const response = await axios.post("http://localhost:3001/Login", formData);

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
    <div className="desktop-1">
      <img className="logo-icon" alt="" src="/logo@2x.png" />
      <div className="title-text">INTERNSHIP PLACEMENT SYSTEM</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="email-box-formgroup" id="email_id">
          <Form.Control
            type="email"
            name="email"
            id="email_id"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group className="password-box-formgroup" id="password_box">
          <Form.Control
            type="password"
            name="password"
            id="password_box"
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
        <Button
          className="login-with-google-button"
          variant="primary"
          name="Login"
        >
          Login with Google
        </Button>
        <Link className="dont-have-an" to="/create-account">
          Don’t have an account? Create one
        </Link>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Login;
