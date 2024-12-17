import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import ServiceItems from "./components/ServiceItems";

const ListService = () => {
  const [selectedCategory, setSelectedCategory] = useState("Nhãn hiệu");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    {
      id: 1,
      name: "Sửa đổi văn bằng bảo hộ Nhãn hiệu",
      category: "Nhãn hiệu",
      form: "form1",
    },
    {
      id: 2,
      name: "Chuyển giao quyền sử dụng nhãn hiệu",
      category: "Nhãn hiệu",
      form: "form2",
    },
    {
      id: 3,
      name: "Bảo hộ công nghiệp cho thương hiệu",
      category: "Nhãn hiệu",
      form: "form1",
    },
    {
      id: 4,
      name: "Đăng ký nhãn hiệu mới",
      category: "Nhãn hiệu",
      form: "form1",
    },
    {
      id: 5,
      name: "Bảo vệ quyền sở hữu trí tuệ",
      category: "Sáng chế",
      form: "form1",
    },
    {
      id: 6,
      name: "Chứng nhận chất lượng sản phẩm",
      category: "Kiểu dáng công nghiệp",
      form: "form1",
    },
  ];

  const filterData = [
    "Nhãn hiệu",
    "Sáng chế",
    "Kiểu dáng công nghiệp",
    "Bản quyền",
  ];

  const filterItems = (term, category) => {
    const lowerCaseTerm = term.toLowerCase();
    return items.filter(
      (item) =>
        (category === "all" || item.category === category) &&
        item.name.toLowerCase().includes(lowerCaseTerm)
    );
  };

  const handleSearch = (term, category = selectedCategory) => {
    setSearchTerm(term);
    setFilteredItems(filterItems(term, category));
  };

  useEffect(() => {
    setFilteredItems(filterItems(searchTerm, selectedCategory));
  }, [selectedCategory, searchTerm]);

  return (
    <div className="py-6">
      <SearchBar onSearch={handleSearch} />
      <FilterButtons
        filterData={filterData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ServiceItems items={filteredItems} />
    </div>
  );
};

export default ListService;
