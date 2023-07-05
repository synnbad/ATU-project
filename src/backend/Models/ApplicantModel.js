const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  appliedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobListing',
  }],
});

const ApplicantModel = mongoose.model('Applicant', applicantSchema);

module.exports = ApplicantModel;
