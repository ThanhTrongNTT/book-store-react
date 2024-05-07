import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState("");
  const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?searchWord=${searchParam}`);
    }
  };
  return (
    <>
      <div className="snap-start bg-gradient-to-r from-primary to-white  px-20 flex items-center h-screen">
        <div className="flex w-full justify-between items-center gap-12 py-40">
          {/* Left Slide */}
          <div className="w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-bold leading-snug text-blue-600">
              Buy and Sell Your Books
            </h2>
            <p className="text-black w-4/5 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              delectus quibusdam fugit labore aut tempora alias ducimus dolores
              dignissimos accusantium eveniet atque voluptate saepe, minima enim
              ex temporibus. Blanditiis, quae!
            </p>
            <SearchBar
              searchWord={searchParam}
              handleKeyDown={handleKeyDown}
              handleSearchWordChange={handleSearchWordChange}
            />
          </div>

          {/* Right Slide */}
          <div className="md:w-1/2 md:h-1/2 w-1/4 h-1/4">
            <img
              className="object-cover rounded-md content-end"
              src="https://plus.unsplash.com/premium_photo-1677013622212-2cd4260dee5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Slide"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
