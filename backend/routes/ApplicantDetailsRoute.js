// Get Applicant Details route
app.get("/Applicants/:applicantId", async (req, res) => {
    try {
      const applicantId = req.params.applicantId;
  
      // Fetch the applicant details
      const applicant = await ApplicantModel.findById(applicantId);
  
      if (!applicant) {
        res.status(404).json({ error: "Applicant not found" });
      } else {
        res.status(200).json(applicant);
      }
    } catch (error) {
      console.error("Error fetching applicant details:", error);
      res.status(500).json({ error: "An error occurred while fetching applicant details" });
    }
  });
  