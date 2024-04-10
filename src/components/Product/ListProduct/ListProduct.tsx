import SkeletonWithImage from "@/components/Skeleton/SkeletonWithImage";
import { Book } from "@/types/book";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
type ListProductProps = {
  bookList: Book[] | undefined;
  isLoaded: boolean;
  limit: number;
};
const ListProduct = ({ bookList, isLoaded, limit }: ListProductProps) => {
  return (
    <>
      <div className="border rounded-lg mx-10 bg-white">
        <div className="flex justify-between px-7 mt-5">
          <h1 className="font-bold text-xl">Popular</h1>
          <h1 className="text-base text-red-600">View All</h1>
        </div>
        <div className="grid grid-cols-3">
          {isLoaded ? (
            <>
              {Array.from({ length: limit }).map((_, index) => (
                <SkeletonWithImage key={index} />
              ))}
            </>
          ) : bookList ? (
            bookList.map((book: Book, index: number) => (
              <>
                <ProductCard key={index} book={book} index={index} />
              </>
            ))
          ) : (
            <>
              {Array.from({ length: limit }).map((_, index) => (
                <SkeletonWithImage key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
