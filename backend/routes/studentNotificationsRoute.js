import express from "express";
import Notification from "../Models/Notification.js";

const router = express.Router();

router.get("/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;

    const notifications = await Notification.find({ recipient: studentId });

    res.status(200).json(notifications);
  } catch (error) {
    console.error("Error fetching student notifications:", error);
    res.status(500).json({ error: "An error occurred while fetching student notifications" });
  }
});

export default router;
