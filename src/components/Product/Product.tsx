import React, { useEffect, useState } from "react";
import SideBar, { Category } from "../SideBar/SideBar";
import ListProduct from "./ListProduct/ListProduct";
import API from "@/libs/api";
import { Pagination } from "antd";
import { Book } from "@/types/book";
import SearchBar from "../SearchBar/SearchBar";
import { Subjects } from "@/types/subjects";

const Product = () => {
  const [bookList, setBookList] = useState<Book[]>();
  const [page, setPage] = useState(1);
  const [totalElement, setTotalElement] = useState(0);
  const [searchWord, setSearchWord] = useState("");

  // Hanldes search word change
  const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchWord(e.target.value);
  };

  // Search Book
  // const searchBook = async () => {
  //   console.log(searchWord);
  //   const res = await API.app.searchBook(searchWord, 6, 1);
  //   const data: Subjects = res.data;
  //   if (res !== null && data !== null) {
  //     console.log(data.docs);
  //   }
  // };

  // // Get All books
  // const getAllBook = async () => {
  //   const res = await API.app.searchBook("", 6, 0);
  //   const data: Subjects = res.data;
  //   if (res !== null && data !== null) {
  //     setTotalElement(data.docs.length);
  //     setBookList(data.docs);
  //   }
  // };

  // Get book list
  const fetchBookList = async (page: number) => {
    try {
      const res = await API.app.searchBook("", 6, page);
      console.log(res);

      const data: Subjects = res.data;
      if (res !== null && data !== null) {
        setBookList(data.docs);
        console.log(bookList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page < 1) {
      setPage(1);
      fetchBookList(page - 1);
      console.log(page);
      return;
    }
    fetchBookList(page - 1);
    setPage(page);
    console.log(page);
  };

  // Categories
  const [categories, setCategories] = useState<Category[]>([
    { name: "All", isActive: true },
    { name: "Love", isActive: false },
    { name: "Poem", isActive: false },
    { name: "Novel", isActive: false },
    { name: "Science", isActive: false },
    { name: "Ficton", isActive: false },
    { name: "Non-Ficton", isActive: false },
    { name: "Philosophy", isActive: false },
    { name: "Biography", isActive: false },
  ]);

  // Handle nav item click
  const handleNavItemClick = (index: number) => {
    const updatedCatItems = categories.map((item, i) => {
      if (i === index) {
        return { ...item, isActive: !item.isActive };
      }
      return { ...item, isActive: false };
    });
    setCategories(updatedCatItems);
  };

  //
  useEffect(() => {
    const getAllBook = async () => {
      const res = await API.app.searchBook("lord", 6, 0);
      const data: Subjects = res.data;
      if (res !== null && data !== null) {
        setTotalElement(data.docs.length);
        setBookList(data.docs);
      }
    };
    getAllBook();
  }, []);

  // Call searchBook whenever searchWord changes
  useEffect(() => {
    const searchBook = async () => {
      console.log(searchWord);
      const res = await API.app.searchBook(searchWord, 6, 1);
      const data: Subjects = res.data;
      if (res !== null && data !== null) {
        console.log(data.docs);
      }
    };
    searchBook();
  }, [searchWord]);
  return (
    <>
      <div className="flex p-10 mx-auto snap-start">
        {/* Side bar */}
        <SideBar
          handleNavItemClick={handleNavItemClick}
          categories={categories}
        />
        {/* List of products */}
        <div className="flex flex-col">
          <div className="content-center items-center">
            <SearchBar
              handleSearchWordChange={handleSearchWordChange}
              searchWord={searchWord}
            />
          </div>
          <ListProduct bookList={bookList} />
          <div className="m-4 mx-auto">
            <Pagination
              defaultCurrent={1}
              current={page}
              pageSize={6}
              total={totalElement}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
