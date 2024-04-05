import { Book } from "./Book";

export interface Subjects {
  numFound: number;
  start: number;
  subject_type: string;
  docs: Book[]; // Array of Work objects
}
