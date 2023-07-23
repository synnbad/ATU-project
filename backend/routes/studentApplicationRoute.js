import express from "express";
import ApplicantModel from "../Models/ApplicantModel.js";
import Notification from "../Models/Notification.js";

const router = express.Router();

// Route to fetch student dashboard data
router.get("/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;

    // Fetch the student details
    const student = await ApplicantModel.findById(studentId);

    if (!student) {
      res.status(404).json({ error: "Student not found" });
      return;
    }

    // Fetch the student's applications
    const applications = await ApplicantModel.find({ _id: studentId }, "applications");

    // Fetch the student's notifications
    const notifications = await Notification.find({ recipient: studentId });

    res.status(200).json({ student, applications, notifications });
  } catch (error) {
    console.error("Error fetching student dashboard data:", error);
    res.status(500).json({ error: "An error occurred while fetching student dashboard data" });
  }
});

export default router;
