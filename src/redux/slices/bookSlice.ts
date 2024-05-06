import API from "@/libs/api";
import { BookMain, SearchGenre } from "@/types/book";
import { Doc } from "@/types/response";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface BookState {
  popularList: BookMain[];
  isLoadingPopular: boolean;
  total: number;
  recommendedList: BookMain[];
  isLoadingRecommended: boolean;
  newBookList: BookMain[];
  isLoadingNewBook: boolean;
  likeBookList: BookMain[];
  isLoadingLikeBook: boolean;
}

const initialState: BookState = {
  popularList: [],
  isLoadingPopular: false,
  total: 0,
  recommendedList: [],
  isLoadingRecommended: false,
  newBookList: [],
  isLoadingNewBook: false,
  likeBookList: [],
  isLoadingLikeBook: false,
};

export const fetchBook = createAsyncThunk(
  "book/fetchBook",
  async (search: SearchGenre) => {
    const response = await API.app.getBookBySubject(
      search.genre.toLocaleLowerCase(),
      search.page
    );
    return response.data;
  }
);
export const popular = createAsyncThunk("book/popular", async () => {
  const response = await API.app.getBookBySubject("love", 0);
  return response.data;
});

export const recommended = createAsyncThunk("book/recommended", async () => {
  const response = await API.app.getBookBySubject("recommended", 0);
  return response.data;
});

export const newBook = createAsyncThunk("book/newBook", async () => {
  const response = await API.app.getBookBySubject("new", 0);
  return response.data;
});

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    bookClear: () => {
      return {
        popularList: [],
        isLoadingPopular: false,
        total: 0,
        recommendedList: [],
        isLoadingRecommended: false,
        newBookList: [],
        isLoadingNewBook: false,
        likeBookList: [],
        isLoadingLikeBook: false,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoadingPopular = false;
        const selectedBook: BookMain[] = action.payload.works.map(
          (book: Doc) => {
            return {
              title: book.title,
              image: book.cover_id
                ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                : "https://hd-book-store.vercel.app/images/db_bg.jpeg",
              pushlishedYear: book.first_publish_year
                ? book.first_publish_year.toString()
                : "Unknown",
              author: book.authors[0].name ? book.authors[0].name : "Unknown",
              id: book.key,
            };
          }
        );
        state.popularList = selectedBook;
        state.total = action.payload.work_count;
      })
      .addCase(fetchBook.pending, (state) => {
        state.isLoadingPopular = true;
      })
      .addCase(fetchBook.rejected, (state) => {
        state.isLoadingPopular = false;
      })
      .addCase(popular.fulfilled, (state, action) => {
        state.isLoadingPopular = false;
        const selectedBook: BookMain[] = action.payload.works.map(
          (book: Doc) => {
            return {
              title: book.title,
              image: book.cover_id
                ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                : "https://hd-book-store.vercel.app/images/db_bg.jpeg",
              pushlishedYear: book.first_publish_year
                ? book.first_publish_year.toString()
                : "Unknown",
              author: book.authors[0].name ? book.authors[0].name : "Unknown",
              id: book.key,
            };
          }
        );
        state.total = action.payload.work_count;
        state.popularList = selectedBook;
      })
      .addCase(popular.pending, (state) => {
        state.isLoadingPopular = true;
      })
      .addCase(popular.rejected, (state) => {
        state.isLoadingPopular = false;
      })
      .addCase(recommended.fulfilled, (state, action) => {
        state.isLoadingRecommended = false;
        const selectedBook: BookMain[] = action.payload.works.map(
          (book: Doc) => {
            return {
              title: book.title,
              image: book.cover_id
                ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                : "https://hd-book-store.vercel.app/images/db_bg.jpeg",
              pushlishedYear: book.first_publish_year
                ? book.first_publish_year.toString()
                : "Unknown",
              author: book.authors[0].name ? book.authors[0].name : "Unknown",
              id: book.key,
            };
          }
        );
        state.recommendedList = selectedBook;
      })
      .addCase(recommended.pending, (state) => {
        state.isLoadingRecommended = true;
      })
      .addCase(recommended.rejected, (state) => {
        state.isLoadingRecommended = false;
      })
      .addCase(newBook.fulfilled, (state, action) => {
        state.isLoadingNewBook = false;
        const selectedBook: BookMain[] = action.payload.works.map(
          (book: Doc) => {
            return {
              title: book.title,
              image: book.cover_id
                ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                : "https://hd-book-store.vercel.app/images/db_bg.jpeg",
              pushlishedYear: book.first_publish_year
                ? book.first_publish_year.toString()
                : "Unknown",
              author: book.authors[0].name ? book.authors[0].name : "Unknown",
              id: book.key,
            };
          }
        );
        state.newBookList = selectedBook;
      })
      .addCase(newBook.pending, (state) => {
        state.isLoadingNewBook = true;
      })
      .addCase(newBook.rejected, (state) => {
        state.isLoadingNewBook = false;
      });
  },
});
export const { bookClear } = bookSlice.actions;
export const getBookList = (state: { book: BookState }) =>
  state.book.popularList;
export const getPopularList = (state: { book: BookState }) =>
  state.book.popularList;
export const getIsLoadingPopular = (state: { book: BookState }) =>
  state.book.isLoadingPopular;
export const getTotal = (state: { book: BookState }) => state.book.total;
export const getRecommendedList = (state: { book: BookState }) =>
  state.book.recommendedList;
export const getIsLoadingRecommended = (state: { book: BookState }) =>
  state.book.isLoadingRecommended;
export const getNewBookList = (state: { book: BookState }) =>
  state.book.newBookList;
export const getIsLoadingNewBook = (state: { book: BookState }) =>
  state.book.isLoadingNewBook;
export const getLikeBookList = (state: { book: BookState }) =>
  state.book.likeBookList;

export default bookSlice.reducer;
