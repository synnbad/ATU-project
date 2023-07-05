import React from "react";
import "./RecruiterNotifications.css";

const RecruiterNotifications = () => {
  // Sample data for notifications
  const notifications = [
    { id: 1, message: "You have a new message" },
    // Rest of the notifications data...
  ];

  const handleNotificationClick = (id) => {
    // Logic for handling notification click functionality
  };

  return (
    <div className="recruiter-notifications-container">
      <h2 className="section-title">Recruiter Notifications</h2>

      <ul className="notification-list">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="notification-item"
            onClick={() => handleNotificationClick(notification.id)}
          >
            <p className="notification-message">{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecruiterNotifications;
