import API from "@/libs/api";
import { BookDetail } from "@/types/book";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface DetailState {
  bookData: BookDetail;
  isLoading: boolean;
}

const initialState: DetailState = {
  bookData: {
    id: "",
    description: "",
    title: "",
    image: "",
    subjectPlaces: "",
    subjectTimes: "",
    subjects: "",
  },
  isLoading: false,
};

export const detailBook = createAsyncThunk(
  "book/detail",
  async (id: string) => {
    const response = await API.app.getBook(id);
    return response.data;
  }
);
export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    clearDetail: () => {
      return {
        bookData: {
          id: "",
          description: "",
          title: "",
          image: "",
          subjectPlaces: "",
          subjectTimes: "",
          subjects: "",
        },
        isLoading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(detailBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookData = {
          id: action.payload.key,
          description:
            typeof action.payload.description === "string"
              ? action.payload.description
              : action.payload.description.value,
          title: action.payload.title,
          image: action.payload.covers
            ? `https://covers.openlibrary.org/b/id/${action.payload.covers[0]}-M.jpg`
            : "https://hd-book-store.vercel.app/images/db_bg.jpeg",
          subjectPlaces: action.payload.subject_places
            ? action.payload.subject_places.join(", ")
            : "No subject times found",
          subjectTimes: action.payload.subject_times
            ? action.payload.subject_times.join(", ")
            : "No subject places found",
          subjects: action.payload.subjects
            ? action.payload.subjects.join(", ")
            : "No subject found",
        };
      })
      .addCase(detailBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(detailBook.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { clearDetail } = detailSlice.actions;

export const selectDetail = (state: { detail: DetailState }) =>
  state.detail.bookData;

export default detailSlice.reducer;
