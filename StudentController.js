// StudentController.js

import Student from "./src/models/student.js";
import JobListing from "./JobListing.js";

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

    // Fetch data for the student dashboard from the database or external APIs
    // ...

    // Process the fetched data and render the student dashboard template or send the data as JSON
    // ...

    // Example: Sending a JSON response with sample data
    res.status(200).json({ message: "Student dashboard data" });
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
