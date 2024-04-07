import SkeletonWithImage from "@/components/Skeleton/SkeletonWithImage";
import { Book } from "@/types/book";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
type ListProductProps = {
  bookList: Book[] | undefined;
  isLoaded: boolean;
};
const ListProduct = ({ bookList, isLoaded }: ListProductProps) => {
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
              <SkeletonWithImage key={1} />
              <SkeletonWithImage key={2} />
              <SkeletonWithImage key={3} />
              <SkeletonWithImage key={4} />
              <SkeletonWithImage key={5} />
              <SkeletonWithImage key={6} />
            </>
          ) : bookList ? (
            bookList.map((book: Book, index: number) => (
              <>
                <ProductCard book={book} index={index} />
              </>
            ))
          ) : (
            <>
              <SkeletonWithImage key={1} />
              <SkeletonWithImage key={2} />
              <SkeletonWithImage key={3} />
              <SkeletonWithImage key={4} />
              <SkeletonWithImage key={5} />
              <SkeletonWithImage key={6} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
