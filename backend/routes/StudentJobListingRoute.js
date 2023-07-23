import express from "express";
import JobListing from "../Models/JobListing.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const jobListings = await JobListing.find();

    res.status(200).json(jobListings);
  } catch (error) {
    console.error("Error fetching job listings:", error);
    res.status(500).json({ error: "An error occurred while fetching job listings" });
  }
});

export default router;
