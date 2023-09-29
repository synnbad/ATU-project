import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["student","recruiter"],
  },
  
  education: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  
  password: {
    type: String,
    required: true,
  },
  appliedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobListing',
  }],
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
