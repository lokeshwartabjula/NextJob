/*
  Author: Kruti Panchal
  Banner Id: B00930563
  email id: kr946702@dal.ca
*/

export interface ApplicantsType {
    id: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    state: string;
    postalCode: string;
    userId: string;
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
