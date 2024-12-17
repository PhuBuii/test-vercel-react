import React from "react";

const FilterButtons = ({
  filterData,
  selectedCategory,
  setSelectedCategory,
}) => (
  <div className="flex space-x-4 mb-6">
    {filterData.map((category) => (
      <button
        key={category}
        className={`px-6 py-2 rounded-lg flex items-center justify-center gap-3 hover:bg-[#0457C2] hover:text-white ${
          selectedCategory === category
            ? "bg-[#0457C2] text-white"
            : "bg-white text-[#0457C2]"
        }`}
        onClick={() => setSelectedCategory(category)}
      >
        <img
          src="/images/category-image.png"
          alt="category"
          className="w-[54px] h-[32px]"
        />
        {category}
      </button>
    ))}
  </div>
);

export default FilterButtons;
