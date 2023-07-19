// Student Applications route
app.get("/StudentApplications/:studentId", async (req, res) => {
    try {
      const studentId = req.params.studentId;
  
      // Fetch the student's applications
      const studentApplications = await ApplicantModel.find({ _id: studentId }, "applications");
  
      if (!studentApplications) {
        res.status(404).json({ error: "Student applications not found" });
      } else {
        res.status(200).json(studentApplications);
      }
    } catch (error) {
      console.error("Error fetching student applications:", error);
      res.status(500).json({ error: "An error occurred while fetching student applications" });
    }
  });