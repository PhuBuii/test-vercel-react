import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => setSearchTerm(e.target.value);

  const handleSearchClick = () => {
    onSearch(searchTerm); // Pass the search term to the parent component
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex gap-6 w-1/2">
        <div className="relative w-2/3 flex items-center">
          <input
            type="text"
            placeholder="Tìm kiếm dịch vụ"
            className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500 w-full"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <span
            className="absolute right-3 cursor-pointer"
            onClick={handleSearchClick}
            aria-label="Search"
          >
            <img src="/icons/search-black.svg" alt="Search icon" />
          </span>
        </div>
        <select
          className="w-1/3 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-blue-500"
          onChange={(e) => onSearch(searchTerm, e.target.value)}
        >
          <option value="all">Tất cả dịch vụ</option>
          <option value="Nhãn hiệu">Nhãn hiệu</option>
          <option value="Sáng chế">Sáng chế</option>
          <option value="Kiểu dáng công nghiệp">Kiểu dáng công nghiệp</option>
          <option value="Bản quyền">Bản quyền</option>
        </select>
      </div>
      <button
        onClick={handleSearchClick}
        className="bg-[#0457C2] text-white px-4 py-2 rounded-lg text-sm font-be-vietnam-medium flex items-center justify-center gap-2"
      >
        <img src="/icons/search.svg" alt="Search icon" />
        Tìm kiếm
      </button>
    </div>
  );
};

export default SearchBar;
