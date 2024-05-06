// import Product from "@/components/Product/Product";
// import { useAppDispatch } from "@/redux/store";
import React from "react";

const Search = () => {
  // const dispatch = useAppDispatch();
  // const [bookList, setBookList] = useState<Book[]>();
  // const [page, setPage] = useState(1);
  // const [totalElement, setTotalElement] = useState(0);
  // const [searchWord, setSearchWord] = useState("");
  // const [isLoaded, setIsLoaded] = useState(false);

  // Handles limit change
  // const handleLimitChange = (current: number, size: number) => {
  //   setPage(current);
  //   setLimit(size);
  // };
  // // Search
  // const handleSearchBook = async () => {
  //   setIsLoaded(true);
  //   const res = await API.app.searchBook(searchWord, limit, page, fieldsString);
  //   const data: Subjects = res.data;
  //   if (res !== null && data !== null) {
  //     setTotalElement(data.numFound);
  //     setBookList(data.docs);
  //     setIsLoaded(false);
  //   }
  // };

  // const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPage(1);
  //   setSearchWord(e.target.value);
  // };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     handleSearchBook();
  //   }
  // };

  // const fieldsString =
  //   "key,title,author_name,first_publish_year,subject,ia_collection,cover_i,cover_edition_key,edition_count";

  // Call searchBook whenever searchWord changes
  // useEffect(() => {
  //   const searchBook = async () => {
  //     setIsLoaded(true);
  //     const res = await API.app.searchBook(
  //       searchWord,
  //       limit,
  //       page,
  //       fieldsString
  //     );
  //     const data: Subjects = res.data;
  //     if (res !== null && data !== null) {
  //       setTotalElement(data.numFound);
  //       setBookList(data.docs);
  //       setIsLoaded(false);
  //     }
  //   };
  //   searchBook();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page, limit]);
  return <div className="h-screen">{/*<Product /> */}</div>;
};

export default Search;
