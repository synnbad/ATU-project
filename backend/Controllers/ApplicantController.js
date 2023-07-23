const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/applicants', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ApplicantModel = require('./models/ApplicantModel');

// Create Applicant Profile
const createApplicantProfile = async (req, res) => {
  try {
    const { name, email, experience, education, skills, resume } = req.body;

    // Create a new applicant profile
    const newApplicant = new ApplicantModel({
      name,
      email,
      experience,
      education,
      skills,
      resume,
      appliedJobs: [],
    });

    // Save the applicant profile to the database
    await newApplicant.save();

    res.status(201).json({
      message: 'Applicant profile created successfully',
      applicant: newApplicant,
    });
  } catch (error) {
    console.error('Error creating applicant profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update Applicant Profile
const updateApplicantProfile = async (req, res) => {
  try {
    const { name, email, experience, education, skills, resume } = req.body;
    const { applicantId } = req.params;

    // Find the applicant by ID
    const applicant = await ApplicantModel.findById(applicantId);

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found' });
    }

    // Update the applicant profile
    applicant.name = name;
    applicant.email = email;
    applicant.experience = experience;
    applicant.education = education;
    applicant.skills = skills;
    applicant.resume = resume;

    // Save the updated applicant profile
    await applicant.save();

    res
      .status(200)
      .json({ message: 'Applicant profile updated successfully', applicant });
  } catch (error) {
    console.error('Error updating applicant profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get Applicant Details
const getApplicantDetails = async (req, res) => {
  try {
    const { applicantId } = req.params;

    // Find the applicant by ID
    const applicant = await ApplicantModel.findById(applicantId);

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found' });
    }

    res.status(200).json({ applicant });
  } catch (error) {
    console.error('Error fetching applicant details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Manage Applications for Job Listings
const manageApplications = async (req, res) => {
  try {
    const { applicantId } = req.params;
    const { jobListingId, action } = req.body;

    // Find the applicant by ID
    const applicant = await ApplicantModel.findById(applicantId);

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found' });
    }

    // Perform the requested action
    if (action === 'apply') {
      // Apply for a job listing
      applicant.appliedJobs.push(jobListingId);
    } else if (action === 'withdraw') {
      // Withdraw application from a job listing
      const index = applicant.appliedJobs.indexOf(jobListingId);
      if (index !== -1) {
        applicant.appliedJobs.splice(index, 1);
      }
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }

    // Save the updated applicant profile
    await applicant.save();

    res
      .status(200)
      .json({ message: 'Application managed successfully', applicant });
  } catch (error) {
    console.error('Error managing applications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Routes
app.post('/applicants', createApplicantProfile);
app.put('/applicants/:applicantId', updateApplicantProfile);
app.get('/applicants/:applicantId', getApplicantDetails);
app.post('/applicants/:applicantId/applications', manageApplications);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
