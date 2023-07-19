// Manage Applications for Job Listings route
app.post("/Applicants/:applicantId/applications", async (req, res) => {
    try {
      const applicantId = req.params.applicantId;
      const { jobId, cv } = req.body;
  
      // Check if the job listing exists
      const jobListing = await JobListing.findById(jobId);
  
      if (!jobListing) {
        res.status(404).json({ error: "Job listing not found" });
        return;
      }
  
      // Create a new application
      const application = {
        jobId,
        cv,
        status: "pending",
      };
  
      // Update the applicant's applications
      const updatedApplicant = await ApplicantModel.findByIdAndUpdate(
        applicantId,
        { $push: { applications: application } },
        { new: true }
      );
  
      if (!updatedApplicant) {
        res.status(404).json({ error: "Applicant not found" });
      } else {
        res.status(200).json(updatedApplicant);
      }
    } catch (error) {
      console.error("Error managing applications:", error);
      res.status(500).json({ error: "An error occurred while managing applications" });
    }
  });
  