import ImageCustom from "@/components/Image/ImageCustom";
import Modal from "@/components/Modal/Modal";
import { Book } from "@/types/book";
import { useEffect, useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaLine } from "react-icons/fa6";
type ProductCardProps = {
  book: Book;
  index: number;
};
const ProductCard = (props: ProductCardProps) => {
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
        key={props.index}
        className="h-[370px] w-[500px] flex p-2 m-5 shadow-2xl transition duration-300 ease-in-out hover:scale-110"
      >
        <ImageCustom
          alt={props.book.title}
          height={300}
          src={`https://covers.openlibrary.org/b/id/${props.book.cover_i}-M.jpg`} // use normal <img> attributes as props
          width={48}
        />
        {/* <img
          src={`https://covers.openlibrary.org/b/id/${props.book.cover_i}-M.jpg`}
          alt=""
          className="w-48 h-[300px] object-cover rounded-md"
          loading="lazy"
        /> */}
        <div className="p-4 mx-5 space-y-10">
          <h3 className="text-lg font-bold text-black h-1/3">
            {props.book.title}
          </h3>
          <span className="text-lg">
            <p className="font-bold">Author:</p> {props.book.author_name}
          </span>
          <span className="text-lg">
            <p className="font-bold">Publish Year:</p>{" "}
            {props.book.first_publish_year}
          </span>
          <div className="flex justify-start content-center text-2xl text-red-600 cursor-pointer">
            <button onClick={() => setShowModal(true)}>
              <span className="flex gap-x-2 items-center">
                <FaShareFromSquare /> <p>Share</p>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={onClose}>
        <div className="flex gap-x-10 text-5xl justify-center p-5">
          <div className="text-blue-900 cursor-pointer">
            <FaFacebook />
          </div>
          <div className="cursor-pointer">
            <FaInstagram />
          </div>
          <div className="cursor-pointer">
            <FaSquareXTwitter />
          </div>
          <div className="cursor-pointer">
            <FaLinkedin />
          </div>
          <div className="text-green-700 cursor-pointer">
            <FaLine />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;
