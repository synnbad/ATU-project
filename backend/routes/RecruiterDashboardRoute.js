import express from "express";
import RecruiterModel from "../Models/RecruiterModel.js";
import JobListing from "../Models/JobListing.js"; 
import Notification from "../Models/Notification.js";

const router = express.Router();

router.get("/:recruiterId", async (req, res) => {
  try {
    const recruiterId = req.params.recruiterId;

    // Fetch the recruiter details
    const recruiter = await RecruiterModel.findById(recruiterId);

    if (!recruiter) {
      res.status(404).json({ error: "Recruiter not found" });
      return;
    }

    // Fetch job listings posted by the recruiter
    const jobListings = await JobListing.find({ recruiter: recruiterId });

    // Fetch the recruiter's notifications
    const notifications = await Notification.find({ recipient: recruiterId });

    res.status(200).json({ recruiter, jobListings, notifications });
  } catch (error) {
    console.error("Error fetching recruiter dashboard data:", error);
    res.status(500).json({ error: "An error occurred while fetching recruiter dashboard data" });
  }
});

export default router;
