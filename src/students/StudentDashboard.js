import React from "react";
import { Link } from "react-router-dom";
import styles from "./StudentDashboard.css";

const StudentDashboard = () => {
  const jobRecommendations = [
    {
      id: 1,
      company: "Company X",
      position: "Software Engineer",
      location: "City A",
    },
    // Rest of the job recommendations data...
  ];

  const appliedJobsCount = 5; // Sample data for the number of applied jobs

  return (
    <div className={styles.container}>
      <div className={styles.dashboardContent}>
        <div className={styles.sidebar}>
          <h1>Welcome to Your Student Dashboard</h1>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Job Recommendations</h2>
            {jobRecommendations.map((recommendation) => (
              <div className={styles.card} key={recommendation.id}>
                <h3 className={styles.jobCardTitle}>{recommendation.position}</h3>
                <p>{recommendation.company}</p>
                <p>{recommendation.location}</p>
                <Link to={`/job/${recommendation.id}`} className={styles.link}>
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Applied Jobs</h2>
            <p className={styles.appliedJobsCount}>
              You have applied to {appliedJobsCount} jobs
            </p>
            <Link to="/applied-jobs" className={styles.link}>
              View Applied Jobs
            </Link>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Your Profile</h2>
            <p>View and update your profile information</p>
            <Link to="/student-profile" className={styles.link}>
              Go to Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
