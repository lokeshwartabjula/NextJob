/*
  Author: Kruti Panchal
  Banner Id: B00930563
  email id: kr946702@dal.ca
*/

import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export type JobStepsInformationType = {
    id: number;
    title: string;
    iconName: IconDefinition;
    iconColor: string;
    backgroundColor: string;
    description?: string;
}