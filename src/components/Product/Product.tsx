import React from "react";
import SideBar, { Category } from "../SideBar/SideBar";
import ListProduct from "./ListProduct/ListProduct";
import { Pagination } from "antd";
import { Book } from "@/types/book";
import SearchBar from "../SearchBar/SearchBar";
type ProductProps = {
  categories: Category[];
  handleNavItemClick: (index: number) => void;
  handleSearchWordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchWord: string;
  bookList: Book[] | undefined;
  isLoaded: boolean;
  page: number;
  totalElement: number;
  limit: number;
  handlePageChange: (page: number) => void;
  handleLimitChange: (current: number, size: number) => void;
};
const Product = (props: ProductProps) => {
  return (
    <>
      <div className="flex p-10 mx-auto snap-start">
        {/* Side bar */}
        <SideBar
          handleNavItemClick={props.handleNavItemClick}
          categories={props.categories}
        />
        {/* List of products */}
        <div className="flex flex-col">
          <div className="content-center items-center">
            <SearchBar
              handleSearchWordChange={props.handleSearchWordChange}
              searchWord={props.searchWord}
            />
          </div>
          <ListProduct
            bookList={props.bookList}
            isLoaded={props.isLoaded}
            limit={props.limit}
          />
          <div className="m-4 mx-auto">
            <Pagination
              defaultCurrent={1}
              current={props.page}
              pageSize={props.limit}
              total={props.totalElement}
              onChange={props.handlePageChange}
              showSizeChanger
              onShowSizeChange={props.handleLimitChange}
              pageSizeOptions={[3, 6, 12, 24]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
