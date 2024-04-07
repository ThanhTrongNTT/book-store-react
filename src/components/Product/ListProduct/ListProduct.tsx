import SkeletonWithImage from "@/components/Skeleton/SkeletonWithImage";
import { Book } from "@/types/book";
import React from "react";
const ProductCard = React.lazy(() => import("../ProductCard/ProductCard"));
type ListProductProps = {
  bookList: Book[] | undefined;
};
const ListProduct = ({ bookList }: ListProductProps) => {
  return (
    <>
      <div className="border rounded-lg mx-10 bg-white">
        <div className="flex justify-between px-7 mt-5">
          <h1 className="font-bold text-xl">Popular</h1>
          <h1 className="text-base text-red-600">View All</h1>
        </div>
        <div className="grid grid-cols-3">
          {bookList ? (
            bookList.map((book: Book) => (
              <>
                <ProductCard book={book} />
              </>
            ))
          ) : (
            <>
              <SkeletonWithImage />
              <SkeletonWithImage />
              <SkeletonWithImage />
              <SkeletonWithImage />
              <SkeletonWithImage />
              <SkeletonWithImage />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
