import React from "react";
import { useAppContext } from "../context/AppContext";

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useAppContext();
  return (
    <div className="py-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white ring-2 ring-slate-900/30 w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search here..."
            className="border-none outline-none w-full text-sm"
          />
          <i className="ri-search-line"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
