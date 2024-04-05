import React from "react";
import { FaSearch } from "react-icons/fa";
type SearchBarProps = {
  searchWord: string;
  handleSearchWordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="bg-white w-1/2 border-r h-10 px-4 shadow-xl flex items-center rounded-lg ml-10 mb-5">
      <FaSearch id="search-icon" className="text-blue-600" />
      <input
        type="text"
        placeholder="Type to search"
        className="bg-transparent border-none h-full text-xl w-full ml-1 focus:outline-none"
        value={props.searchWord}
        onChange={(e) => props.handleSearchWordChange(e)}
      />
    </div>
  );
};

export default SearchBar;
