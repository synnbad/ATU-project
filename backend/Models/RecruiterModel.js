import mongoose from 'mongoose';

const recruiterSchema = new mongoose.Schema({
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

  password: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required:true,

  },
  position: {
    type: String,
    required: true,
  },
  postedListings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobListing',
  }],
});

export default mongoose.model('Recruiter', recruiterSchema);



