import express from "express";
import bcrypt from "bcrypt";
import Users from "../Models/Users.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password, name, education, skills, university, } = req.body;

    console.log("Reached createStudentAccount route");

    // Check if the user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new Users({
      email,
      password: hashedPassword,
      name,
      education,
      role: "Student",
      skills,
      university,
    });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error("Error creating account:", error);
    return res.status(500).json({ message: "An error occurred while creating the account" });
  }
});

export default router;
