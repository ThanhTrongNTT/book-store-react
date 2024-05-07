import API from "@/libs/api";
import { BookMain } from "@/types/book";
import { Doc } from "@/types/response";
import { SearchParams } from "@/types/search";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchBookList: BookMain[];
  isLoading: boolean;
  total: number;
}

const initialState: SearchState = {
  searchBookList: [],
  isLoading: false,
  total: 0,
};

export const searchBook = createAsyncThunk(
  "book/search",
  async (param: SearchParams) => {
    const response = await API.app.searchBook(
      param.searchWord,
      param.limit,
      param.page
    );
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchBook.fulfilled, (state, action) => {
        state.searchBookList = action.payload.docs.map((doc: Doc) => {
          return {
            title: doc.title,
            image: doc.cover_i
              ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
              : "https://hd-book-store.vercel.app/images/db_bg.jpeg",
            pushlishedYear: doc.first_publish_year
              ? doc.first_publish_year.toString()
              : "Unknown",
            author: doc.author_name ? doc.author_name : "Unknown",
            id: doc.key,
          };
        });
        state.total = action.payload.numFound;
        state.isLoading = false;
      })
      .addCase(searchBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchBook.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectSearchBookList = (state: { search: SearchState }) =>
  state.search.searchBookList;
export const selectIsLoading = (state: { search: SearchState }) =>
  state.search.isLoading;
export const selectTotal = (state: { search: SearchState }) =>
  state.search.total;

export default searchSlice.reducer;
