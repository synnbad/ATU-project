// Student Dashboard route
app.get("/StudentDashboard/:studentId", async (req, res) => {
    try {
      const studentId = req.params.studentId;
  
      // Fetch the student dashboard data and process it
      const studentDashboardData = await getStudentDashboardData(studentId);
  
      res.status(200).json(studentDashboardData);
    } catch (error) {
      console.error("Error fetching student dashboard data:", error);
      res.status(500).json({ error: "An error occurred while fetching student dashboard data" });
    }
  });
  