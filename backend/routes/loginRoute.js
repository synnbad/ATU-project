import express from "express";
import bcrypt from "bcrypt";
import Users from "../Models/Users.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {

    const { email, password } = req.body;

    // Check if the user exists in the database
    const user = await Users.findOne({ email: email });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Validate the password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }

    // If the email and password are valid, return a success message
    res.status(200).json({
      email: user.email, 
      role: user.role ,
      message: "Login successful",
    });

  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
});

export default router;
