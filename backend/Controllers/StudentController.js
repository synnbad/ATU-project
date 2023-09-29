// Import the necessary models and modules

import Student from "./src/recruiters/models/student.js";
import JobListing from "../../../JobListing.js";
import Notification from "./src/recruiters/models/notification.js";

// Get Student Applications
export const getStudentApplications = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Find the student by ID
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Get the student's applications
    const applications = await JobListing.find({
      _id: { $in: student.applications },
    });

    res.status(200).json({ applications });
  } catch (error) {
    console.error("Error fetching student applications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get Student Dashboard
export const getStudentDashboard = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Find the student by ID
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Implement your logic to fetch and process data for the student dashboard
    // Example: Fetch data from your database or external APIs
    // Replace with your actual data-fetching logic
    const dashboardData = await fetchDataForStudentDashboard(student);

    res.status(200).json(dashboardData);
  } catch (error) {
    console.error("Error fetching student dashboard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get Job Listings
export const getJobListings = async (req, res) => {
  try {
    // Fetch all job listings from the database
    const jobListings = await JobListing.find();

    res.status(200).json({ jobListings });
  } catch (error) {
    console.error("Error fetching job listings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get Student Notifications
export const getNotifications = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Find the student by ID
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Get the student's notifications
    const notifications = await Notification.find({ recipient: studentId });

    res.status(200).json({ notifications });
  } catch (error) {
    console.error("Error fetching student notifications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Helper function to fetch data for the student dashboard
const fetchDataForStudentDashboard = async (student) => {
  // Implement your logic to fetch and process data for the student dashboard here
  // Example: Fetch data from your database or external APIs
  // Replace with your actual data-fetching logic

  const dashboardData = {
    message: "Student dashboard data",
    // Add more data fields as needed
  };

  return dashboardData;
};
