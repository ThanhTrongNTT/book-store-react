import Banner from "@/components/Banner/Banner";
import Product from "@/components/Product/Product";
import { Category } from "@/components/SideBar/SideBar";
import API from "@/libs/api";
import { Book } from "@/types/book";
import { Subjects } from "@/types/subjects";
import { useEffect, useState } from "react";

const Dashboard = () => {
  // Execute the getAllBook function when the component is mounted
  const [bookList, setBookList] = useState<Book[]>();
  const [page, setPage] = useState(1);
  const [totalElement, setTotalElement] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [limit, setLimit] = useState(6); // Number of items per page

  // Handles limit change
  const handleLimitChange = (current: number, size: number) => {
    setPage(current);
    setLimit(size);
  };
  // Hanldes search word change
  const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearchWord(e.target.value);
  };

  const fieldsString =
    "key,title,author_name,first_publish_year,subject,ia_collection,cover_i,cover_edition_key,edition_count";

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

  // Handle page change
  const handlePageChange = async (page: number) => {
    setIsLoaded(true);
    if (page < 1) {
      setPage(1);
      setIsLoaded(false);
      return;
    }
    setPage(page);
    setIsLoaded(false);
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
      setIsLoaded(true);
      const res = await API.app.searchBook("", limit, page, fieldsString);
      const data: Subjects = res.data;
      if (res !== null && data !== null) {
        setTotalElement(data.numFound);
        setBookList(data.docs);
        setIsLoaded(false);
      }
    };
    getAllBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Call searchBook whenever searchWord changes
  useEffect(() => {
    const searchBook = async () => {
      setIsLoaded(true);
      const res = await API.app.searchBook(
        searchWord,
        limit,
        page,
        fieldsString
      );
      const data: Subjects = res.data;
      if (res !== null && data !== null) {
        setTotalElement(data.numFound);
        setBookList(data.docs);
        setIsLoaded(false);
      }
    };
    searchBook();
  }, [page, searchWord, limit]);
  return (
    <>
      <div className="font-inter flex flex-col justify-center">
        <Banner />
        <Product
          categories={categories}
          handleNavItemClick={handleNavItemClick}
          handleSearchWordChange={handleSearchWordChange}
          handlePageChange={handlePageChange}
          searchWord={searchWord}
          bookList={bookList}
          isLoaded={isLoaded}
          page={page}
          totalElement={totalElement}
          limit={limit}
          handleLimitChange={handleLimitChange}
        />
      </div>
    </>
  );
};

export default Dashboard;
