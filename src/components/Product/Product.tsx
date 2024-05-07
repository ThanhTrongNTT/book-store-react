import React from "react";
import ListProduct from "./ListProduct/ListProduct";
import { Pagination } from "antd";
import { BookMain } from "@/types/book";
import SearchBar from "../SearchBar/SearchBar";
import { SearchParams } from "@/types/search";
type ProductProps = {
  bookList: BookMain[] | undefined;
  isLoaded: boolean;
  searchParam: SearchParams;
  searchWord: string;
  page: number;
  totalElement: number;
  handleSearchWordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handlePageChange: (page: number) => void;
};
const Product = (props: ProductProps) => {
  return (
    <>
      <div className="flex p-10 mx-auto snap-start w-full">
        {/* List of products */}
        <div className="flex flex-col w-full">
          <div className="mx-auto content-center items-center w-1/2">
            <SearchBar
              handleSearchWordChange={props.handleSearchWordChange}
              handleKeyDown={props.handleKeyDown}
              searchWord={props.searchWord}
            />
          </div>
          <ListProduct
            bookList={props.bookList}
            isLoaded={props.isLoaded}
            limit={props.searchParam.limit}
          />
          <div className="m-4 mx-auto">
            <Pagination
              defaultCurrent={1}
              current={props.page}
              pageSize={props.searchParam.limit}
              total={props.totalElement}
              onChange={props.handlePageChange}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
