const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
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

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;
