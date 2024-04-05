import { Subjects } from "@/types/subjects";
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
      GET_BOOK: (limit: number, page: number, q: string) =>
        `https://openlibrary.org/subjects/love.json?q=${q}&offset=${page * limit}&limit=${limit}`,
      GET_ALL_BOOK: "https://openlibrary.org/subjects/love.json",
      SEARCH: (q: string, limit: number, page: number) =>
        `https://openlibrary.org/search.json?q=${q}&limit=${limit}&offset=${page * limit}`,
    },
  },
  app: {
    login: (): Promise<AxiosResponse<void>> => {
      return API.apiInstance.post(API.API_PATH.APP.LOGIN);
    },
    getBook: (
      limit: number,
      page: number,
      q: string
    ): Promise<AxiosResponse<void>> => {
      return API.apiInstance.get(API.API_PATH.BOOK.GET_BOOK(limit, page, q));
    },
    getAllBook: (): Promise<AxiosResponse<void>> => {
      return API.apiInstance.get(API.API_PATH.BOOK.GET_ALL_BOOK);
    },
    searchBook: (
      q: string,
      limit: number,
      page: number
    ): Promise<AxiosResponse<Subjects>> => {
      return API.apiInstance.get(
        API.API_PATH.BOOK.SEARCH(q === "" ? "ramdom" : q, limit, page)
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
    const loader = document.querySelector(".loader");
    if (loader && loader.classList.contains("loader--hidden")) {
      loader.classList.remove("loader--hidden");
    }
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
    if (requestCount === 0) {
      const loader = document.querySelector(".loader");
      if (loader && !loader.classList.contains("loader--hidden")) {
        loader.classList.add("loader--hidden");
      }
    }
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
