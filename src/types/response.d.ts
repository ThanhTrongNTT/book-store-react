import { Author } from "./book";

export interface SubjectResponse {
  key: number;
  name: string;
  subject_type: string;
  work_count: number;
  works: [];
}

export interface Work {
  title: string;
  cover_id: number;
  first_pusblish_year: number;
  authors: [];
  key: string;
}

export interface SearchBookResponse {
  docs: Doc[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: number;
  q: string;
  start: number;
}

export interface Doc {
  title: string;
  cover_id: number;
  first_publish_year: number;
  authors: Author[];
  key: string;
  // Add other properties if needed
}

export interface BookWork {
  description: string;
  title: string;
  covers: number[];
  subject_places: string[];
  subject_times: string[];
  subjects: string[];
}
