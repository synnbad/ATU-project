let JobListing = [];
let Applicant = [];

export function getJobListings() {
  return JobListing;
}

export function addJobListing(newListing) {
  JobListing.push(newListing);
}

export function getApplicants() {
  return Applicant;
}

export function addApplicant(newApplicant) {
  Applicant.push(newApplicant);
}

// Add more data management functions as needed
