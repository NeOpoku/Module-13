// TODO: Create an interface for the Candidate objects returned by the API
// src/interfaces/Candidate.ts
export interface Candidate {
    /** Candidate's full name */
    name: string;
    /** GitHub username */
    login: string;
    /** Candidate's location */
    location: string;
    /** URL to the candidate's avatar image */
    avatar_url: string;
    /** Candidate's email address, if available */
    email?: string;
    /** Candidate's company, if available */
    company?: string;
    /** URL to the candidate's GitHub profile */
    html_url: string;

  }
  