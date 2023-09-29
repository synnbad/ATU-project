import express from "express";
import Student from "../models/StudentModel"; // Import your Student model

const router = express.Router();

// Define a route for fetching student profiles
router.get("/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;

    // Check authentication and authorization here, ensuring the user can access this profile data.

    // Fetch the student's profile data from the database based on studentId
    const studentProfile = await Student.findById(studentId);

    if (!studentProfile) {
      return res.status(404).json({ error: "Student profile not found" });
    }

    res.status(200).json(studentProfile);
  } catch (error) {
    console.error("Error fetching student profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
