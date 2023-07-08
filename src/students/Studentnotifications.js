import React from "react";
import "./StudentNotifications.css";

const StudentNotifications = () => {
  // Sample data for notifications
  const notifications = [
    {
      id: 1,
      title: "New Job Opportunity",
      message: "A new job opportunity is available. Apply now!",
      date: "May 1, 2023",
    },
    {
      id: 2,
      title: "Application Status Update",
      message: "Your job application has been approved.",
      date: "May 5, 2023",
    },
    // Rest of the notifications data...
  ];

  return (
    <div className="student-notifications">
      <h1>Notifications</h1>

      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <h3>{notification.title}</h3>
            <p>{notification.message}</p>
            <p>{notification.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentNotifications;
