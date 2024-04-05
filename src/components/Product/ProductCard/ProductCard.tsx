import { Book } from "@/types/book";
import { FaShareFromSquare } from "react-icons/fa6";
type ProductCardProps = {
  book: Book;
};
const ProductCard = ({ book }: ProductCardProps) => {
  return (
    <>
      <div
        key={book.key}
        className="h-fit flex p-2 m-5 shadow-2xl transition duration-300 ease-in-out hover:scale-110"
      >
        <img
          // src="https://covers.openlibrary.org/b/id/12818862-L.jpg"
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt=""
          className="w-48 h-[300px] object-cover rounded-md"
        />
        <div className="p-4 mx-5 space-y-10">
          <h3 className="text-lg font-bold text-black">{book.title}</h3>
          <p className="text-sm">
            <p className="font-bold">Author:</p> {book.author_name}
          </p>
          <p className="text-sm">
            <p className="font-bold">Publish Year:</p> {book.publish_year}
          </p>
          <div className="flex justify-end content-center text-red-600 cursor-pointer">
            <FaShareFromSquare />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
