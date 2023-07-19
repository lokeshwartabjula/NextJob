export interface JobListingsSearchBarProps {
  searchValue: string;
  applySearch: (value: string) => void;
}

export interface JobData {
  jobDate: string;
  jobCompany: string;
  jobTitle: string;
  companyLogo: string;
  jobType: string;
  salary: string;
  jobLocation: string;
}

export interface JobListingsItemsProps {
  jobData: JobData[];
}
