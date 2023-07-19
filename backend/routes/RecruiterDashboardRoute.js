import express from "express";
import JobListing from "../backend/Models/JobListing.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recruiterId = req.query.recruiterId;

    // Fetch job listings posted by the recruiter
    const jobListings = await JobListing.find({ recruiter: recruiterId });

    res.status(200).json(jobListings);
  } catch (error) {
    console.error("Error fetching job listings:", error);
    res.status(500).json({ error: "An error occurred while fetching job listings" });
  }
});

export default router;
