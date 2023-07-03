import React from "react";

const Applicants = () => {
  // Sample data for applicants
  const applicants = [
    { id: 1, name: "John Doe", experience: "2 years" },
    // Rest of the applicants data...
  ];

  return (
    <div>
      <h1>Applicant Management</h1>

      <ul>
        {applicants.map((applicant) => (
          <li key={applicant.id}>
            <h3>{applicant.name}</h3>
            <p>Experience: {applicant.experience}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applicants;
