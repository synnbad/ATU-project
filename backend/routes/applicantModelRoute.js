import express from "express";
import ApplicantModel from "../Models/ApplicantModel.js";

const router = express.Router();

router.post("/applicants", async (req, res) => {
  try {
    const { name, university, course } = req.body;

    // Create a new applicant profile
    const newApplicant = await ApplicantModel.create({ name, university, course });

    res.status(201).json(newApplicant);
  } catch (error) {
    console.error("Error creating applicant profile:", error);
    res.status(500).json({ error: "An error occurred while creating applicant profile" });
  }
});

export default router;
