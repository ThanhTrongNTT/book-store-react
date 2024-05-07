import ListProduct from "@/components/Product/ListProduct/ListProduct";
import SideBar, { Category } from "@/components/SideBar/SideBar";
import {
  fetchBook,
  getIsLoadingPopular,
  getPopularList,
  getTotal,
  popular,
} from "@/redux/slices/bookSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Pagination } from "antd";
import React, { useEffect, useState } from "react";

const Genres = () => {
  const dispatch = useAppDispatch();
  const popularList = useAppSelector(getPopularList);
  const loadingPopular = useAppSelector(getIsLoadingPopular);
  const total = useAppSelector(getTotal);
  const limit = 6;
  const [page, setPage] = useState(0);
  const [searchGenre, setSearchGenre] = useState({ genre: "love", page: 0 });

  // Handle page change
  const handlePageChange = async (page: number) => {
    if (page < 1) {
      setPage(1);
      setSearchGenre((prev) => ({ ...prev, page: page - 1 }));
      return;
    }
    setPage(page);
    setSearchGenre((prev) => ({ ...prev, page: page - 1 }));
  };

  // Categories
  const [categories, setCategories] = useState<Category[]>([
    { name: "Love", isActive: true },
    { name: "Poem", isActive: false },
    { name: "Novel", isActive: false },
    { name: "Science", isActive: false },
    { name: "Ficton", isActive: false },
    { name: "Non-Ficton", isActive: false },
    { name: "Philosophy", isActive: false },
    { name: "Biography", isActive: false },
  ]);

  // Handle nav item click
  const handleNavItemClick = (index: number) => {
    const updatedCatItems = categories.map((item, i) => {
      if (i === index) {
        setPage(1);
        setSearchGenre({ genre: item.name.toLowerCase(), page: 0 });
        return { ...item, isActive: !item.isActive };
      }
      return { ...item, isActive: false };
    });
    setCategories(updatedCatItems);
  };

  useEffect(() => {
    dispatch(popular());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchBook(searchGenre));
  }, [dispatch, searchGenre]);

  return (
    <div className="flex p-10 mx-auto snap-start">
      {/* Side bar */}
      <SideBar
        handleNavItemClick={handleNavItemClick}
        categories={categories}
      />
      {/* List of products */}
      <div className="flex flex-col gap-5">
        <div className="content-center items-center">
          {/* Popular Books */}
          <ListProduct
            bookList={popularList}
            isLoaded={loadingPopular}
            limit={limit}
          />
        </div>
        <div className="m-4 mx-auto">
          <Pagination
            defaultCurrent={1}
            current={page}
            pageSize={limit}
            total={total}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Genres;
