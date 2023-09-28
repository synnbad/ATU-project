import express from "express";
import cors from "cors";
import connectDB from "./backend/mongodbConnect.js";
import loginRoute from "./backend/routes/loginRoute.js";
import usersRoute from "./backend/routes/usersRoute.js";
import recruiterDashboardRoutes from "./backend/routes/RecruiterDashboardRoute.js";
import jobListingRoutes from "./backend/routes/JobListingRoute.js";
import applicantModelRoute from "./backend/routes/applicantModelRoute.js";
import studentDashboardRoute from "./backend/routes/studentDashboardRoute.js";
import studentApplicationsRoute from "./backend/routes/studentApplicationRoute.js"
import studentJobListingRoute from "./backend/routes/studentJobListingRoute.js";
import studentNotificationsRoute from "./backend/routes/studentNotificationsRoute.js";
import createStudentAccount from "./backend/routes/createStudentAccountRoute.js";
import createRecruiterAccount from "./backend/routes/createRecruiterAccountRoute.js";

connectDB();

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
app.use("/login", loginRoute);
app.use("/users", usersRoute);
app.use("/recruiterDashboard", recruiterDashboardRoutes);
app.use("/jobListing", jobListingRoutes);
app.use("/applicantModel", applicantModelRoute);
app.use("/studentDashboard", studentDashboardRoute);
app.use("/studentApplications", studentApplicationsRoute);
app.use("/studentJobListing", studentJobListingRoute);
app.use("/studentNotifications", studentNotificationsRoute);
app.use("/createStudentAccountRoute",createStudentAccount);
app.use("/createRecruiterAccountRoute",createRecruiterAccount);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
