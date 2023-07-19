// Student Notifications route
app.get("/StudentNotifications/:studentId", async (req, res) => {
    try {
      const studentId = req.params.studentId;
  
      // Fetch the student's notifications
      const notifications = await Notification.find({ recipient: studentId });
  
      res.status(200).json(notifications);
    } catch (error) {
      console.error("Error fetching student notifications:", error);
      res.status(500).json({ error: "An error occurred while fetching student notifications" });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
  // Function to fetch and process student dashboard data
  async function getStudentDashboardData(studentId) {
    // Fetch student details
    const student = await ApplicantModel.findById(studentId);
  
    // Fetch student applications
    const applications = await ApplicantModel.find({ _id: studentId }, "applications");
  
    // Fetch student notifications
    const notifications = await Notification.find({ recipient: studentId });
  
    return {
      student,
      applications,
      notifications,
    };
  }
  