import React, { useState } from "react";
import DatePicker from "../../components/DatePicker";

const FilterBar = () => {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSearch = () => {
    // Handle search logic here
    console.log({ search, fromDate, toDate });
  };

  return (
    <div className="flex items-center justify-between rounded-lg">
      <div className=" flex w-2/3 items-center space-x-6 z-0">
        {/* Search Input */}
        <div className=" relative flex items-center w-2/5">
          <input
            type="text"
            placeholder="Tìm kiếm dịch vụ"
            className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute right-3 cursor-pointer">
            <img src="/icons/search-black.svg" alt="Search icon" />
          </span>
        </div>
        {/* From Date Picker */}
        <DatePicker placeholder="Từ ngày" onChange={setFromDate} />

        {/* To Date Picker */}
        <DatePicker placeholder="Đến ngày" onChange={setToDate} />
        {/* Filter Button */}
        <div className="w-1/5 ">
          <div className="px-4 py-2 w-2/5 bg-white border border-gray-200 space-x-[23px] min-w-[120px] flex items-center justify-center rounded-lg">
            <p>Bộ lọc</p>
            <img
              src="/icons/filter-icon.svg"
              alt="Filter icon"
              className="w=[20px] h-[20px]"
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="bg-[#0457C2] text-white px-4 py-2 rounded-lg text-sm font-be-vietnam-medium flex items-center justify-center gap-2"
      >
        <img src="/icons/search.svg" alt="Search icon" />
        Tìm kiếm
      </button>
    </div>
  );
};

export default FilterBar;
