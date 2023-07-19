// Student Job Listing route
app.get("/StudentJobListing", async (req, res) => {
    try {
      // Fetch all job listings
      const jobListings = await JobListing.find();
  
      res.status(200).json(jobListings);
    } catch (error) {
      console.error("Error fetching job listings:", error);
      res.status(500).json({ error: "An error occurred while fetching job listings" });
    }
  });