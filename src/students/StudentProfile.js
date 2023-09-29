import React, { useState, useEffect } from "react";
import "./StudentProfile.css";

const StudentProfile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with actual API call to fetch student profile data
    // Example:
    fetch("/api/student-profile")
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  return (
    <div className="student-profile">
      <h1>My Profile</h1>

      {loading ? (
        <p>Loading profile data...</p>
      ) : (
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
      )}
    </div>
  );
};

export default StudentProfile;
