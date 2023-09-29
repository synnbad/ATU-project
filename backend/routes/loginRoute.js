import express from "express";
import bcrypt from "bcrypt";
import Users from "../Models/Users.js";
import Student from "../Models/StudentModel.js"; // Import the Student model
import Recruiter from "../Models/RecruiterModel.js"; // Import the Recruiter model

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the student model
    const student = await Student.findOne({ email: email });

    if (student) {
      // Validate the password
      if (!student.password) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const validPassword = await bcrypt.compare(password, student.password);

      if (validPassword) {
        return res.status(200).json({
          email: student.email,
          role: "student",
          message: "Student login successful",
        });
      }
    }

    // If not found in the student model, check the recruiter model
    const recruiter = await Recruiter.findOne({ email: email });

    if (recruiter) {
      // Validate the password
      const validPassword = await bcrypt.compare(password, recruiter.password);

      if (validPassword) {
        return res.status(200).json({
          email: recruiter.email,
          role: "recruiter",
          message: "Recruiter login successful",
        });
      }
    }

    // If the email and password are not valid for both roles, return an error
    res.status(401).json({ error: "Invalid email or password" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
});

export default router;
