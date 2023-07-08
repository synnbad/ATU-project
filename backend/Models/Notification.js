import mongoose from "mongoose";

// Define the Notification schema
const notificationSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Notification model
const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
