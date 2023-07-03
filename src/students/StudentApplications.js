import React from "react";
import "./StudentApplications.css";

const StudentApplications = () => {
  // Sample data for job applications
  const applications = [
    {
      id: 1,
      company: "Company X",
      position: "Software Engineer",
      status: "In Review",
    },
    // Rest of the job applications data...
  ];

  return (
    <div className="student-applications">
      <h1>My Applications</h1>

      <ul className="application-list">
        {applications.map((application) => (
          <li key={application.id}>
            <h3>{application.position}</h3>
            <p>{application.company}</p>
            <p>Status: {application.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentApplications;
