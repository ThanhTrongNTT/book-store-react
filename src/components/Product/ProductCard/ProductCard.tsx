import ImageCustom from "@/components/Image/ImageCustom";
import Modal from "@/components/Modal/Modal";
import { BookMain } from "@/types/book";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLine, FaShareFromSquare, FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
type ProductCardProps = {
  book: BookMain;
};
const MAX_LENGTH_TITLE = 40;
const ProductCard = (props: ProductCardProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const shortenText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text; // Trả về đoạn văn bản gốc nếu nó đã ngắn hơn hoặc bằng maxLength
    }

    const shortened = text.substr(0, maxLength); // Cắt đoạn văn bản ban đầu thành maxLength ký tự
    return `${shortened}...`; // Thêm dấu "..." vào cuối đoạn văn bản ngắn
  };
  const imageScr = props.book.image;
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
        key={props.book.id}
        className="h-[370px] w-[500px] flex p-2 m-5 shadow-2xl transition duration-300 ease-in-out hover:scale-90 cursor-pointer"
        onClick={() =>
          navigate(`/detail${props.book.id}?author=${props.book.author}`)
        }
      >
        <ImageCustom
          alt={props.book.title}
          src={imageScr} // use normal <img> attributes as props
        />
        <div className="flex flex-col p-4 mx-5 space-y-10 w-1/2 justify-between">
          <h3
            className="text-lg font-bold text-black h-1/3"
            title={props.book.title}
          >
            {shortenText(props.book.title, MAX_LENGTH_TITLE)}
          </h3>
          <div className="flex-1">
            <span className="text-base">
              <p className="inline-block">by</p>{" "}
              <p className="font-bold inline-block">{props.book.author}</p>
            </span>
            <span className="text-lg">
              <p className="font-bold">{props.book.pushlishedYear}</p>
            </span>
          </div>
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
