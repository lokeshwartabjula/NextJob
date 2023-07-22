export interface JobListingsSearchBarProps {
  searchValue: string;
  applySearch: (value: string) => void;
}

export interface JobListingsItemsProps {
  jobData: JobData[];
}

export interface JobData {
  id: string;
  jobTitle: string;
  jobDescription: string;
  skills: string[];
  jobStatus: string;
  noOfPositions: string;
  jobType: string;
  location: {
    type: string;
    coordinates: number[];
    placeId: string;
    placeName: string;
  };
  salary: string;
  experience: string;
  openDate: string;
  employerId: string;
  jobCompany: string;
  jobCompanyLogo: string;
}
