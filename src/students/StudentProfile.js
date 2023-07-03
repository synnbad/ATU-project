import React from "react";
import "./StudentProfile.css";

const StudentProfile = () => {
  // Sample data for student profile
  const profile = {
    name: "John Doe",
    email: "johndoe@example.com",
    education: "Bachelor's Degree in Computer Science",
    experience: "2 years",
    skills: ["JavaScript", "React", "Node.js"],
  };

  return (
    <div className="student-profile">
      <h1>My Profile</h1>

      <div className="profile-info">
        <p>
          <span>Name:</span> {profile.name}
        </p>
        <p>
          <span>Email:</span> {profile.email}
        </p>
        <p>
          <span>Education:</span> {profile.education}
        </p>
        <p>
          <span>Experience:</span> {profile.experience}
        </p>
        <p>
          <span>Skills:</span> {profile.skills.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default StudentProfile;
