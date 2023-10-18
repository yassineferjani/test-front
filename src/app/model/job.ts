import { Person } from "./person";

export interface Job {
    CompanyName: string;
    positionHeld: string;
    startDate: Date;
    endDate: Date;
    person?: Person; 
  }