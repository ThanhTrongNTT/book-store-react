import React from "react";
import { FaSearch } from "react-icons/fa";
type SearchBarProps = {
  searchWord: string;
  handleSearchWordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="bg-white border-r h-10 px-4 text-xl shadow-xl flex items-center rounded-lg mb-5 content-center">
      <FaSearch id="search-icon" className="text-blue-600" />
      <input
        type="text"
        placeholder="Type to search"
        className="bg-transparent border-none h-full w-full ml-1 focus:outline-none"
        value={props.searchWord}
        onChange={(e) => props.handleSearchWordChange(e)}
        onKeyDown={(e) => props.handleKeyDown(e)}
      />
    </div>
  );
};

export default SearchBar;
