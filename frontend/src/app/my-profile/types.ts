export interface EmployerFormType {
  jobTitle: string;
  phone: string;
  companyName: string;
  industry: string;
  foundedYear: string;
  companySize: string;
  companyType: string;
  description: string;
  websiteURL?: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
//   companyLogo: any | null;
}

export interface EmployerProps extends EmployerFormType {
  id: string;
}

export interface SeekerFormType {
  email: string;
  phone: string;
  address1: string;
  address2: string;
  state: string;
  postalCode: string;
  educations: {
    school: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate?: string;
  }[];
  experiences: {
    company: string;
    title: string;
    location: string;
    startDate: string;
    endDate?: string;
    details?: string;
  }[];
//   resume: any | null;
}

export interface SeekerProps extends SeekerFormType {
  id: string;
}
