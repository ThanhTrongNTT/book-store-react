import SkeletonWithImage from "@/components/Skeleton/SkeletonWithImage";
import { BookMain } from "@/types/book";
import ProductCard from "../ProductCard/ProductCard";
type ListProductProps = {
  bookList: BookMain[] | undefined;
  isLoaded: boolean;
  limit: number;
};
const ListProduct = ({ bookList, isLoaded, limit }: ListProductProps) => {
  return (
    <>
      <div className="border rounded-lg mx-10 bg-white">
        <div className="grid grid-cols-3">
          {isLoaded ? (
            <>
              {Array.from({ length: limit }).map((_, index) => (
                <SkeletonWithImage key={index} />
              ))}
            </>
          ) : bookList ? (
            bookList.map((book: BookMain) => (
              <ProductCard key={book.id} book={book} />
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
