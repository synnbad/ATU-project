import express from "express";
import bcrypt from "bcrypt";
import User from "../Models/Users.js";
import StudentModel from "../Models/StudentModel.js";
import RecruiterModel from "../Models/RecruiterModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user account based on the role
    let newUser;

    if (role === "student") {
      newUser = await User.create({ email, password: hashedPassword, role });
      // Omitting education and skills from StudentModel.create
      await StudentModel.create({ email });
    } else if (role === "recruiter") {
      newUser = await User.create({ email, password: hashedPassword, role });
      // Omitting name from RecruiterModel.create
      await RecruiterModel.create({ email });
    } else {
      return res.status(400).json({ error: "Invalid role" });
    }

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user account:", error);
    res.status(500).json({ error: "An error occurred while creating user account" });
  }
});

export default router;
