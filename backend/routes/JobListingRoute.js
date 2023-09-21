import express from "express";
import JobListing from "../Models/JobListing.js";

const router = express.Router();

router.post("/joblistings", async (req, res) => {
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

export default router;
