import Banner from "@/components/Banner/Banner";
import ListProduct from "@/components/Product/ListProduct/ListProduct";
import {
  getIsLoadingNewBook,
  getIsLoadingPopular,
  getIsLoadingRecommended,
  getNewBookList,
  getPopularList,
  getRecommendedList,
  newBook,
  popular,
  recommended,
} from "@/redux/slices/bookSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";

const Dashboard = () => {
  // Execute the getAllBook function when the component is mounted
  const dispatch = useAppDispatch();
  const popularList = useAppSelector(getPopularList);
  const loadingPopular = useAppSelector(getIsLoadingPopular);
  const recommendList = useAppSelector(getRecommendedList);
  const loadingRecommend = useAppSelector(getIsLoadingRecommended);
  const newList = useAppSelector(getNewBookList);
  const loadingNew = useAppSelector(getIsLoadingNewBook);
  const limit = 6;

  useEffect(() => {
    dispatch(popular());
    dispatch(recommended());
    dispatch(newBook());
  }, [dispatch]);
  return (
    <>
      <div className="font-inter flex flex-col justify-center">
        <Banner />
        <div className="flex p-10 mx-auto snap-start">
          {/* List of products */}
          <div className="flex flex-col gap-5">
            <div className="content-center items-center">
              {/* Popular Books */}
              <div className="flex justify-between px-10 m-5">
                <h1 className="font-bold text-xl">Popular</h1>
                <h1 className="text-base text-red-600">
                  <a href="/genre">View All</a>
                </h1>
              </div>
              <ListProduct
                bookList={popularList}
                isLoaded={loadingPopular}
                limit={limit}
              />
            </div>
            <div className="content-center items-center">
              {/* Recommend Books */}
              <div className="flex justify-between px-10 m-5">
                <h1 className="font-bold text-xl">Recommend</h1>
              </div>
              <ListProduct
                bookList={recommendList}
                isLoaded={loadingRecommend}
                limit={limit}
              />
            </div>
            <div className="content-center items-center">
              {/* New Books */}
              <div className="flex justify-between px-10 m-5">
                <h1 className="font-bold text-xl">New</h1>
              </div>
              <ListProduct
                bookList={newList}
                isLoaded={loadingNew}
                limit={limit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
