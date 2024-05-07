import ImageCustom from "@/components/Image/ImageCustom";
import { detailBook, selectDetail } from "@/redux/slices/detailSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { BookDetail } from "@/types/book";
import React, { useEffect } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const urlParams = new URLSearchParams(window.location.search);
  const author = urlParams.get("author");
  const dispatch = useAppDispatch();
  const bookData: BookDetail = useAppSelector(selectDetail);

  useEffect(() => {
    if (id) dispatch(detailBook(id));
  }, [dispatch, id]);

  return (
    <div className="h-full w-[70%] p-10 m-10 mx-auto items-center content-center shadow-xl">
      <div className="flex justify-between">
        <div className="w-1/2 content-center items-center flex justify-center">
          <ImageCustom alt={bookData.title} src={bookData.image} />
        </div>
        <div className="w-1/2 font-grotesk text-base">
          <h1 className="font-bold text-xl">{bookData.title}</h1>
          <span className="">
            by <span className="font-bold">{author}</span>
          </span>
          <span className="flex gap-x-5 content-center items-center">
            Time: <span className="font-bold">{bookData.subjectTimes}</span>
          </span>
          <span>
            Place: <span className="font-bold">{bookData.subjectPlaces}</span>
          </span>
          <div className="flex justify-start content-center text-2xl text-red-600 cursor-pointer mt-5">
            <button>
              <span className="flex gap-x-2 items-center">
                <FaShareFromSquare /> <p>Share</p>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-lg">{bookData.description}</h1>
        <div className="flex pt-10 items-center text-base ">
          <span>
            Subject: <span className="font-bold">{bookData.subjects}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
