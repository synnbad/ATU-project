import express from "express";
import bcrypt from "bcrypt";
import User from "./Users.js";
import mongoose from "mongoose";
import cors from "cors";
import JobListing from "./JobListing.js";
import { createApplicantProfile, updateApplicantProfile, getApplicantDetails, manageApplications } from "./ApplicantController.js";
import { getStudentApplications, getStudentDashboard, getJobListings, getNotifications } from "./StudentController.js";

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://synbadadjuik:Chopbox12@internship-placement.arkuqgx.mongodb.net/Internship-placement", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middleware to parse JSON body
app.use(express.json());

// Enable CORS
app.use(cors());

// Login route
app.post("/Login", async (req, res) => {
  // Implementation code
});

// Recruiter Dashboard route
app.get("/RecruiterDashboard", (req, res) => {
  // Implementation code
});

// Create Job Listing route
app.post("/CreateJobListing", async (req, res) => {
  // Implementation code
});

// Create Applicant Profile route
app.post("/Applicants", createApplicantProfile);

// Update Applicant Profile route
app.put("/Applicants/:applicantId", updateApplicantProfile);

// Get Applicant Details route
app.get("/Applicants/:applicantId", getApplicantDetails);

// Manage Applications for Job Listings route
app.post("/Applicants/:applicantId/applications", manageApplications);

// Student Applications route
app.get("/StudentApplications/:studentId", getStudentApplications);

// Student Dashboard route
app.get("/StudentDashboard/:studentId", getStudentDashboard);

// Student Job Listing route
app.get("/StudentJobListing", getJobListings);

// Student Notifications route
app.get("/Studentnotifications/:studentId", getNotifications);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
