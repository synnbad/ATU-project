import mongoose from "mongoose";

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://synbadadjuik:Chopbox12@internship-placement.arkuqgx.mongodb.net/Internship-placement", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });