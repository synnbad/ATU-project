import express from "express";
import bcrypt from "bcrypt";
import Users from "../../Users.js";
import mongoose from "mongoose";
import cors from "cors";
import JobListing from "../../JobListing.js"
import Applicant from "../recruiters/Applicants.js"
import Notification from "./Notification.js";

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
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const user = await Users.findOne({ email });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Validate the password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }

    // If the email and password are valid, return a success message
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
});

// Create Account Route
app.post("/CreateAccount", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user account
    const newUser = await Users.create({ email, password: hashedPassword });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user account:", error);
    res.status(500).json({ error: "An error occurred while creating user account" });
  }
});

// Recruiter Dashboard route
app.get("/RecruiterDashboard", async (req, res) => {
  try {
    const recruiterId = req.query.recruiterId; // Assuming the recruiter ID is passed as a query parameter

    // Fetch job listings posted by the recruiter
    const jobListings = await JobListing.find({ recruiter: recruiterId });

    // Return the list of job listings
    res.status(200).json(jobListings);
  } catch (error) {
    console.error("Error fetching job listings:", error);
    res.status(500).json({ error: "An error occurred while fetching job listings" });
  }
});

// Create Job Listing route
app.post("/CreateJobListing", async (req, res) => {
  try {
    const { title, company, position, location } = req.body;

    // Create a new job listing
    const newJobListing = await JobListing.create({ title, company, position, location });

    res.status(201).json(newJobListing);
  } catch (error) {
    console.error("Error creating job listing:", error);
    res.status(500).json({ error: "An error occurred while creating job listing" });
  }
});

// Create Applicant Profile route
app.post("/Applicants", async (req, res) => {
  try {
    const { name, university, course } = req.body;

    // Create a new applicant profile
    const newApplicant = await Applicant.create({ name, university, course });

    res.status(201).json(newApplicant);
  } catch (error) {
    console.error("Error creating applicant profile:", error);
    res.status(500).json({ error: "An error occurred while creating applicant profile" });
  }
});

// Update Applicant Profile route
app.put("/Applicants/:applicantId", async (req, res) => {
  try {
    const applicantId = req.params.applicantId;
    const { name, university, course } = req.body;

    // Update the applicant profile
    const updatedApplicant = await Applicant.findByIdAndUpdate(
      applicantId,
      { name, university, course },
      { new: true }
    );

    if (!updatedApplicant) {
      res.status(404).json({ error: "Applicant not found" });
    } else {
      res.status(200).json(updatedApplicant);
    }
  } catch (error) {
    console.error("Error updating applicant profile:", error);
    res.status(500).json({ error: "An error occurred while updating applicant profile" });
  }
});

// Get Applicant Details route
app.get("/Applicants/:applicantId", async (req, res) => {
  try {
    const applicantId = req.params.applicantId;

    // Fetch the applicant details
    const applicant = await Applicant.findById(applicantId);

    if (!applicant) {
      res.status(404).json({ error: "Applicant not found" });
    } else {
      res.status(200).json(applicant);
    }
  } catch (error) {
    console.error("Error fetching applicant details:", error);
    res.status(500).json({ error: "An error occurred while fetching applicant details" });
  }
});

// Manage Applications for Job Listings route
app.post("/Applicants/:applicantId/applications", async (req, res) => {
  try {
    const applicantId = req.params.applicantId;
    const { jobId, cv } = req.body;

    // Check if the job listing exists
    const jobListing = await JobListing.findById(jobId);

    if (!jobListing) {
      res.status(404).json({ error: "Job listing not found" });
      return;
    }

    // Create a new application
    const application = {
      jobId,
      cv,
      status: "pending",
    };

    // Update the applicant's applications
    const updatedApplicant = await Applicant.findByIdAndUpdate(
      applicantId,
      { $push: { applications: application } },
      { new: true }
    );

    if (!updatedApplicant) {
      res.status(404).json({ error: "Applicant not found" });
    } else {
      res.status(200).json(updatedApplicant);
    }
  } catch (error) {
    console.error("Error managing applications:", error);
    res.status(500).json({ error: "An error occurred while managing applications" });
  }
});

// Student Applications route
app.get("/StudentApplications/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;

    // Fetch the student's applications
    const studentApplications = await Applicant.find({ _id: studentId }, "applications");

    if (!studentApplications) {
      res.status(404).json({ error: "Student applications not found" });
    } else {
      res.status(200).json(studentApplications);
    }
  } catch (error) {
    console.error("Error fetching student applications:", error);
    res.status(500).json({ error: "An error occurred while fetching student applications" });
  }
});

// Student Dashboard route
app.get("/StudentDashboard/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;

    // Fetch the student dashboard data
    const studentDashboardData = await studentDashboardData(studentId);

    res.status(200).json(studentDashboardData);
  } catch (error) {
    console.error("Error fetching student dashboard data:", error);
    res.status(500).json({ error: "An error occurred while fetching student dashboard data" });
  }
});

// Student Job Listing route
app.get("/StudentJobListing", async (req, res) => {
  try {
    // Fetch all job listings
    const jobListings = await JobListing.find();

    res.status(200).json(jobListings);
  } catch (error) {
    console.error("Error fetching job listings:", error);
    res.status(500).json({ error: "An error occurred while fetching job listings" });
  }
});

// Student Notifications route
app.get("/StudentNotifications/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;

    // Fetch the student's notifications
    const notifications = await Notification.find({ recipient: studentId });

    res.status(200).json(notifications);
  } catch (error) {
    console.error("Error fetching student notifications:", error);
    res.status(500).json({ error: "An error occurred while fetching student notifications" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
