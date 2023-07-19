import express from "express";
import bcrypt from "bcrypt";
import Users from "../backend/Models/Users.js";
import StudentModel from "../backend/Models/StudentModel.js";
import RecruiterModel from "../backend/Models/RecruiterModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if the user already exists
    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user account based on the role
    let newUser;
    if (role === "student") {
      newUser = await StudentModel.create({ email, password: hashedPassword });
    } else if (role === "recruiter") {
      newUser = await RecruiterModel.create({ email, password: hashedPassword });
    } else {
      res.status(400).json({ error: "Invalid role" });
      return;
    }

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user account:", error);
    res.status(500).json({ error: "An error occurred while creating user account" });
  }
});

export default router;
