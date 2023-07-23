import express from "express";
import bcrypt from "bcrypt";
import User from "../Models/Users.js";
import StudentModel from "../Models/StudentModel.js";
import RecruiterModel from "../Models/RecruiterModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, education, skills, password, role } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user account based on the role
    let newUser = await User.create({email, password: hashedPassword, role });
    
    if (role === "student") {
      let newStudent = await StudentModel.create({ name, email, education, skills });
      res.status(201).json(newStudent);
    } else if (role === "recruiter") {
      let newRecruiter = await RecruiterModel.create({ name, email });
      res.status(201).json(newRecruiter);
    } else {
      res.status(400).json({ error: "Invalid role" });
      return;
    }

    
  } catch (error) {
    console.error("Error creating user account:", error);
    res.status(500).json({ error: "An error occurred while creating user account" });
  }
});

export default router;
