import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://synbadadjuik:Chopbox12@internship-placement.arkuqgx.mongodb.net/Internship-placement",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  }catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;