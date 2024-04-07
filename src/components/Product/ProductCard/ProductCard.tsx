import ImageCustom from "@/components/Image/ImageCustom";
import Modal from "@/components/Modal/Modal";
import { Book } from "@/types/book";
import { useEffect, useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
type ProductCardProps = {
  book: Book;
};
const ProductCard = ({ book }: ProductCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [showModal]);

  return (
    <>
      <div
        key={book.key}
        className="h-[370px] w-[500px] flex p-2 m-5 shadow-2xl transition duration-300 ease-in-out hover:scale-110"
      >
        <ImageCustom
          alt={book.title}
          height={300}
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} // use normal <img> attributes as props
          width={48}
        />
        {/* <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt=""
          className="w-48 h-[300px] object-cover rounded-md"
          loading="lazy"
        /> */}
        <div className="p-4 mx-5 space-y-10">
          <h3 className="text-lg font-bold text-black">{book.title}</h3>
          <p className="text-sm">
            <p className="font-bold">Author:</p> {book.author_name}
          </p>
          <p className="text-sm">
            <p className="font-bold">Publish Year:</p> {book.first_publish_year}
          </p>
          <div className="flex justify-end content-center text-red-600 cursor-pointer">
            <button onClick={() => setShowModal(true)}>
              <FaShareFromSquare />
            </button>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={onClose} />
    </>
  );
};

export default ProductCard;
