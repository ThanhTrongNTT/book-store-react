import {
  BookWork,
  SearchBookResponse,
  SubjectResponse,
} from "@/types/response";
import axios, { AxiosResponse } from "axios";

const API = {
  apiInstance: axios.create({
    baseURL: "",
    // withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      // ...(import.meta.env.VITE_ENV === "development" && {
      //   "Access-Control-Allow-Origin": "*",
      // }),
    },
  }),

  API_PATH: {
    APP: {
      LOGIN: "/example/login",
    },
    BOOK: {
      GET_BOOK: (id: string) => `https://openlibrary.org/works/${id}.json`,
      SEARCH: (q: string, limit: number, page: number) =>
        `https://openlibrary.org/search.json?q=${q}&offset=${page * limit}&fields=key,title,author_name,first_publish_year,cover_i&limit=${limit}`,
      GET_BOOK_BY_SUBJECT: (subject: string, page: number) =>
        `https://openlibrary.org/subjects/${subject}.json?limit=6&offset=${page * 6}`,
    },
  },
  app: {
    login: (): Promise<AxiosResponse<void>> => {
      return API.apiInstance.post(API.API_PATH.APP.LOGIN);
    },
    getBook: (id: string): Promise<AxiosResponse<BookWork>> => {
      return API.apiInstance.get(API.API_PATH.BOOK.GET_BOOK(id));
    },
    searchBook: (
      q: string,
      limit: number,
      page: number
    ): Promise<AxiosResponse<SearchBookResponse>> => {
      return API.apiInstance.get(
        API.API_PATH.BOOK.SEARCH(
          q === "" ? "ramdom" : q.replaceAll(" ", "+"),
          limit,
          page - 1
        )
      );
    },
    getBookBySubject: (
      subject: string,
      page: number
    ): Promise<AxiosResponse<SubjectResponse>> => {
      return API.apiInstance.get(
        API.API_PATH.BOOK.GET_BOOK_BY_SUBJECT(subject, page)
      );
    },
  },
};

let requestCount = 0;

API.apiInstance.interceptors.request.use(
  function (config) {
    // spinning start to show
    // UPDATE: Add this code to show global loading indicator
    requestCount++;
    // const loader = document.querySelector(".loader");
    // if (loader && loader.classList.contains("loader--hidden")) {
    //   loader.classList.remove("loader--hidden");
    // }
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.apiInstance.interceptors.response.use(
  function (response) {
    // spinning hide
    // UPDATE: Add this code to hide global loading indicator
    // Decrement the request count
    requestCount--;

    // Hide loader if all requests are finished
    // if (requestCount === 0) {
    //   const loader = document.querySelector(".loader");
    //   if (loader && !loader.classList.contains("loader--hidden")) {
    //     loader.classList.add("loader--hidden");
    //   }
    // }
    return response;
  },
  function (error) {
    // spinning hide
    // UPDATE: Add this code to hide global loading indicator
    // Decrement the request count
    requestCount--;

    // Hide loader if all requests are finished
    if (requestCount === 0) {
      const loader = document.querySelector(".loader");
      if (loader && !loader.classList.contains("loader--hidden")) {
        loader.classList.add("loader--hidden");
      }
    }
    return Promise.reject(error);
  }
);

// API.apiInstance.defaults.withCredentials = true;

export default API;
