// Update Applicant Profile route
app.put("/Applicants/:applicantId", async (req, res) => {
    try {
      const applicantId = req.params.applicantId;
      const { name, university, course } = req.body;
  
      // Update the applicant profile
      const updatedApplicant = await ApplicantModel.findByIdAndUpdate(
        applicantId,
        { name, university, course },
        { new: true }
      );
  
      if (!updatedApplicant) {
        res.status(404).json({ error: "Applicant not found" });
      } else {
        res.status(200).json(updatedApplicant);
      }
    } catch (error) {
      console.error("Error updating applicant profile:", error);
      res.status(500).json({ error: "An error occurred while updating applicant profile" });
    }
  });
  