import express from "express";
import bcrypt from "bcrypt";
import Recruiter from "../Models/RecruiterModel.js"; 

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password, name, company, position, location } = req.body;

    console.log("Reached createRecruiterAccount route");

    // Check if the recruiter already exists using the Recruiter model
    const existingRecruiter = await Recruiter.findOne({ email });
    if (existingRecruiter) {
      return res.status(400).json({ message: "Recruiter already exists" });
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new recruiter object using the Recruiter model
    const newRecruiter = new Recruiter({
      email,
      password: hashedPassword,
      name,
      role: "recruiter", // You can set the role here if needed
      company,
      position,
      location,
    });

    // Save the recruiter to the database
    await newRecruiter.save();

    return res.status(201).json({ message: "Recruiter account created successfully" });
  } catch (error) {
    console.error("Error creating recruiter account:", error);
    return res.status(500).json({ message: "An error occurred while creating the recruiter account" });
  }
});

export default router;
