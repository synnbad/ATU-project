import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoutes from "./routes/login.js";
import usersRoutes from "./routes/users.js";
import recruiterDashboardRoutes from "./routes/recruiterDashboard.js";
import jobListingRoutes from "./routes/jobListing.js";
import applicantModelRoutes from "./routes/applicantModel.js";
import studentDashboardRoutes from "./routes/studentDashboard.js";
import studentApplicationsRoutes from "./routes/studentApplications.js";
import studentJobListingRoutes from "./routes/studentJobListing.js";
import studentNotificationsRoutes from "./routes/studentNotifications.js";

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://<your-mongodb-connection-url>", {
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
