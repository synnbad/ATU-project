import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoutes from "./backend/routes/loginRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import recruiterDashboardRoutes from "./backend/routes/recruiterDashboardRoute.js";
import jobListingRoutes from "./backend/routes/jobListingRoute.js";
import applicantModelRoutes from "./backend/routes/applicantModelRoute.js";
import studentDashboardRoutes from "./backend/routes/studentDashboardRoute.js";
import studentApplicationsRoutes from "./routes/studentApplicationsRoute.js";
import studentJobListingRoutes from "./backend/routes/studentJobListingRoute.js";
import studentNotificationsRoutes from "./backend/routes/studentNotificationsRoute.js";

const app = express();
const port = 3001;



// Middleware to parse JSON body
app.use(express.json());

// Enable CORS with specific origin and exposed headers
const corsOptions = {
  origin: "http://localhost:3000",
  exposedHeaders: ["Content-Length", "Authorization"],
};

app.use(cors(corsOptions));

// Routes
app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/recruiterDashboard", recruiterDashboardRoutes);
app.use("/jobListing", jobListingRoutes);
app.use("/applicantModel", applicantModelRoutes);
app.use("/studentDashboard", studentDashboardRoutes);
app.use("/studentApplications", studentApplicationsRoutes);
app.use("/studentJobListing", studentJobListingRoutes);
app.use("/studentNotifications", studentNotificationsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
