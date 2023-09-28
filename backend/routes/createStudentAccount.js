import express from "express";
import bcrypt from "bcrypt";
import Student from "../Models/StudentModel.js"; 

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password, name, education, skills, university } = req.body;

    console.log("Reached createStudentAccount route");

    // Check if the student already exists using the Student model
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new student object using the Student model
    const newStudent = new Student({
      email,
      password: hashedPassword,
      name,
      education,
      role: "student", // You can set the role here if needed
      skills,
      university,
    });

    // Save the student to the database
    await newStudent.save();

    return res.status(201).json({ message: "Student account created successfully" });
  } catch (error) {
    console.error("Error creating student account:", error);
    return res.status(500).json({ message: "An error occurred while creating the student account" });
  }
});

export default router;
