export interface Book {
  key: string;
  title: string; // Book title
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
