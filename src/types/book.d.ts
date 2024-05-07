export interface Book {
  id: string; // Book ID
  title: string; // Book title
  image: string; // Book cover image
  author: string; // Book author
  publishedYear: string; // Book published date
  edition_count: number;
  cover_i: number;
  cover_edition_key: string;
  first_publish_year: number;
  author_name: string[];
  subject: string[];
  ia_collection: string[];
}

export interface Author {
  key: string;
  name: string; // Book title
}
export interface BookMain {
  title: string; // Book title
  image: string; // Book cover image
  pushlishedYear: string; // Book published date
  author: string; // Book author
  id: string; // Book ID
}

export interface Author {
  key: string;
  name: string; // Book title
}

export interface BookDetail {
  description: string; // Book description
  title: string; // Book title
  image: string; // Book cover image
  subjectPlaces: string[];
  subjectTimes: string[];
  subjects: string[];
}

export interface SearchGenre {
  genre: string;
  page: number;
}

export interface SearchBookParam {
  search: string;
  limit: number;
  page: number;
}
