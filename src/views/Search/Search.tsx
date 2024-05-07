// import Product from "@/components/Product/Product";
// import { useAppDispatch } from "@/redux/store";
import Product from "@/components/Product/Product";
import {
  searchBook,
  selectIsLoading,
  selectSearchBookList,
  selectTotal,
} from "@/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { SearchParams } from "@/types/search";
import React, { useEffect, useState } from "react";

const Search = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const dispatch = useAppDispatch();
  const searchBooks = useAppSelector(selectSearchBookList);
  const loadingBooks = useAppSelector(selectIsLoading);
  const totalElement = useAppSelector(selectTotal);
  const [searchWord, setSearchWord] = useState(
    urlParams.get("searchWord") || ""
  );
  const [page, setPage] = useState(1);
  const [searchParam, setSearchParam] = useState<SearchParams>({
    searchWord: searchWord,
    limit: 6,
    page: page,
  });

  // Search
  const handlePageChange = async (page: number) => {
    if (page < 1) {
      setPage(1);
      setSearchParam((prev) => ({ ...prev, page: page }));
      return;
    }
    setPage(page);
    setSearchParam((prev) => ({ ...prev, page: page }));
  };

  const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setPage(1);
      setSearchParam((prev) => ({
        ...prev,
        searchWord: searchWord,
        page: page,
      }));
      dispatch(searchBook(searchParam));
    }
  };

  // Call searchBook whenever searchWord changes
  useEffect(() => {
    dispatch(searchBook(searchParam));
  }, [searchParam, dispatch]);
  return (
    <Product
      bookList={searchBooks}
      isLoaded={loadingBooks}
      searchParam={searchParam}
      searchWord={searchWord}
      page={page}
      totalElement={totalElement}
      handleSearchWordChange={handleSearchWordChange}
      handleKeyDown={handleKeyDown}
      handlePageChange={handlePageChange}
    />
  );
};

export default Search;
